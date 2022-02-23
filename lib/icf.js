"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCloudFunction = void 0;
const provider_check_1 = require("./utils/provider-check");
function isCloudFunction(config) {
    const isCloudFunction = (0, provider_check_1.providerCheck)();
    if ((config === null || config === void 0 ? void 0 : config.returnType) === 'provider')
        return (isCloudFunction ? isCloudFunction : null);
    return Boolean(isCloudFunction);
}
exports.isCloudFunction = isCloudFunction;
//# sourceMappingURL=icf.js.map