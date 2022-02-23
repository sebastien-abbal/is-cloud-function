"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('Tests - AZURE Lambdas', () => {
    describe('With AZURE env variables', () => {
        const OLD_ENV = process.env;
        beforeEach(() => {
            jest.resetModules();
            process.env = Object.assign(Object.assign({}, OLD_ENV), { AzureWebJobsStorage: 'xxx-xxx-xxx' });
        });
        it('should return true', () => {
            expect((0, src_1.isCloudFunction)()).toBe(true);
            expect((0, src_1.isCloudFunction)({ returnType: 'boolean' })).toBe(true);
        });
        it('should return AZURE', () => {
            expect((0, src_1.isCloudFunction)({ returnType: 'provider' })).toBe('AZURE');
        });
        afterAll(() => {
            process.env = OLD_ENV;
        });
    });
    describe('Without AZURE env variables', () => {
        it('should return false', () => {
            expect((0, src_1.isCloudFunction)({ returnType: 'provider' })).toBe(null);
            expect((0, src_1.isCloudFunction)({ returnType: 'boolean' })).toBe(false);
            expect((0, src_1.isCloudFunction)()).toBe(false);
        });
    });
});
//# sourceMappingURL=icf-azure.spec.js.map