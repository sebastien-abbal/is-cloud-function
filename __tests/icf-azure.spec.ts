import { ICF_EnumConfigType, isCloudFunction } from '../src';

describe('Tests - AZURE Lambdas', () => {
  describe('With AZURE env variables', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...OLD_ENV, AzureWebJobsStorage: 'xxx-xxx-xxx' };
    });

    it('should return true', () => {
      expect(isCloudFunction()).toBe(true);
      expect(isCloudFunction({ type: ICF_EnumConfigType.BOOLEAN })).toBe(true);
    });
    it('should return AZURE', () => {
      expect(isCloudFunction({ type: ICF_EnumConfigType.PROVIDER })).toBe(
        'AZURE',
      );
    });

    afterAll(() => {
      process.env = OLD_ENV;
    });
  });

  describe('Without AZURE env variables', () => {
    it('should return false', () => {
      expect(isCloudFunction({ type: ICF_EnumConfigType.PROVIDER })).toBe(null);
      expect(isCloudFunction({ type: ICF_EnumConfigType.BOOLEAN })).toBe(false);
      expect(isCloudFunction()).toBe(false);
    });
  });
});
