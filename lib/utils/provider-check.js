"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerCheck = void 0;
const providerCheck = () => {
    if (process.env.LAMBDA_TASK_ROOT && process.env.AWS_EXECUTION_ENV)
        return 'AWS';
    if (process.env.X_GOOGLE_FUNCTION_NAME)
        return 'GOOGLE';
    if (process.env.AzureWebJobsStorage)
        return 'AZURE';
    return;
};
exports.providerCheck = providerCheck;
//# sourceMappingURL=provider-check.js.map