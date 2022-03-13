import {
  ICF_ConfigType,
  ICF_EnumConfigType,
  ICF_IConfig,
  ICF_Result,
} from './@types';
import { providerCheck } from './utils/provider-check';

export function isCloudFunction<T extends ICF_ConfigType = 'BOOLEAN'>(
  config?: ICF_IConfig<T>,
): ICF_Result<T> {
  const isCloudFunction = providerCheck();
  if (config?.type === ICF_EnumConfigType.PROVIDER) {
    return (isCloudFunction ? isCloudFunction : null) as ICF_Result<T>;
  } else {
    return Boolean(isCloudFunction) as ICF_Result<T>;
  }
}
