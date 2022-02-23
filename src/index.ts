import { ICFConfigReturnType, ICFResult } from './@types';
import { providerCheck } from './utils/provider-check';

export function isCloudFunction<T extends ICFConfigReturnType>(config?: {
  returnType: T;
}): ICFResult<T> {
  const isCloudFunction = providerCheck();
  if (config?.returnType === 'provider')
    return (isCloudFunction ? isCloudFunction : null) as ICFResult<T>;
  return Boolean(isCloudFunction) as ICFResult<T>;
}
