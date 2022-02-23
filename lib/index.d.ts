import { ICFConfigReturnType, ICFResult } from './@types';
export declare function isCloudFunction<T extends ICFConfigReturnType>(config?: {
    returnType: T;
}): ICFResult<T>;
