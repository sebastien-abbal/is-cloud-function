"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('Tests - GOOGLE Lambdas', () => {
    describe('With GOOGLE env variables', () => {
        const OLD_ENV = process.env;
        beforeEach(() => {
            jest.resetModules();
            process.env = Object.assign(Object.assign({}, OLD_ENV), { X_GOOGLE_FUNCTION_NAME: 'xxx-xxx-xxx' });
        });
        it('should return true', () => {
            expect((0, src_1.isCloudFunction)()).toBe(true);
            expect((0, src_1.isCloudFunction)({ returnType: 'boolean' })).toBe(true);
        });
        it('should return GOOGLE', () => {
            expect((0, src_1.isCloudFunction)({ returnType: 'provider' })).toBe('GOOGLE');
        });
        afterAll(() => {
            process.env = OLD_ENV;
        });
    });
    describe('Without GOOGLE env variables', () => {
        it('should return false', () => {
            expect((0, src_1.isCloudFunction)({ returnType: 'provider' })).toBe(null);
            expect((0, src_1.isCloudFunction)({ returnType: 'boolean' })).toBe(false);
            expect((0, src_1.isCloudFunction)()).toBe(false);
        });
    });
});
//# sourceMappingURL=icf-google.spec.js.map