"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('Tests - AWS Lambdas', () => {
    describe('With AWS env variables', () => {
        const OLD_ENV = process.env;
        beforeEach(() => {
            jest.resetModules();
            process.env = Object.assign(Object.assign({}, OLD_ENV), { LAMBDA_TASK_ROOT: 'xxx-xxx-xxx', AWS_EXECUTION_ENV: 'test' });
        });
        it('should return true', () => {
            expect((0, src_1.isCloudFunction)()).toBe(true);
            expect((0, src_1.isCloudFunction)({ returnType: 'boolean' })).toBe(true);
        });
        it('should return AWS', () => {
            expect((0, src_1.isCloudFunction)({ returnType: 'provider' })).toBe('AWS');
        });
        afterAll(() => {
            process.env = OLD_ENV;
        });
    });
    describe('Without AWS env variables', () => {
        it('should return false', () => {
            expect((0, src_1.isCloudFunction)({ returnType: 'provider' })).toBe(null);
            expect((0, src_1.isCloudFunction)({ returnType: 'boolean' })).toBe(false);
            expect((0, src_1.isCloudFunction)()).toBe(false);
        });
    });
});
//# sourceMappingURL=icf-aws.spec.js.map