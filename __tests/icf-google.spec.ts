import { isCloudFunction } from '../src';

describe('Tests - GOOGLE Lambdas', () => {
  describe('With GOOGLE env variables', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...OLD_ENV, X_GOOGLE_FUNCTION_NAME: 'xxx-xxx-xxx' };
    });

    it('should return true', () => {
      expect(isCloudFunction()).toBe(true);
      expect(isCloudFunction({ returnType: 'boolean' })).toBe(true);
    });
    it('should return GOOGLE', () => {
      expect(isCloudFunction({ returnType: 'provider' })).toBe('GOOGLE');
    });

    afterAll(() => {
      process.env = OLD_ENV;
    });
  });

  describe('Without GOOGLE env variables', () => {
    it('should return false', () => {
      expect(isCloudFunction({ returnType: 'provider' })).toBe(null);
      expect(isCloudFunction({ returnType: 'boolean' })).toBe(false);
      expect(isCloudFunction()).toBe(false);
    });
  });
});
