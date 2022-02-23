import { ICF_EnumConfigType, isCloudFunction } from '../src';

describe('Tests - GOOGLE Lambdas', () => {
  describe('With GOOGLE env variables', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...OLD_ENV, X_GOOGLE_FUNCTION_NAME: 'xxx-xxx-xxx' };
    });

    it('should return true', () => {
      expect(isCloudFunction()).toBe(true);
      expect(isCloudFunction({ type: ICF_EnumConfigType.BOOLEAN })).toBe(true);
    });
    it('should return GOOGLE', () => {
      expect(isCloudFunction({ type: ICF_EnumConfigType.PROVIDER })).toBe(
        'GOOGLE',
      );
    });

    afterAll(() => {
      process.env = OLD_ENV;
    });
  });

  describe('Without GOOGLE env variables', () => {
    it('should return false', () => {
      expect(isCloudFunction({ type: ICF_EnumConfigType.PROVIDER })).toBe(null);
      expect(isCloudFunction({ type: ICF_EnumConfigType.BOOLEAN })).toBe(false);
      expect(isCloudFunction()).toBe(false);
    });
  });
});
