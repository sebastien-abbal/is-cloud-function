import { ICF_EnumConfigType, isCloudFunction } from '../src';

describe('Tests - AWS Lambdas', () => {
  describe('With AWS env variables', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = {
        ...OLD_ENV,
        LAMBDA_TASK_ROOT: 'xxx-xxx-xxx',
        AWS_EXECUTION_ENV: 'test',
      };
    });

    it('should return true', () => {
      expect(isCloudFunction()).toBe(true);
      expect(isCloudFunction({ type: ICF_EnumConfigType.BOOLEAN })).toBe(true);
    });
    it('should return AWS', () => {
      expect(isCloudFunction({ type: ICF_EnumConfigType.PROVIDER })).toBe(
        'AWS',
      );
    });

    afterAll(() => {
      process.env = OLD_ENV;
    });
  });

  describe('Without AWS env variables', () => {
    it('should return false', () => {
      expect(isCloudFunction({ type: ICF_EnumConfigType.PROVIDER })).toBe(null);
      expect(isCloudFunction({ type: ICF_EnumConfigType.BOOLEAN })).toBe(false);
      expect(isCloudFunction()).toBe(false);
    });
  });
});
