import {
  ICF_ConfigType,
  ICF_EnumConfigType,
  ICF_IConfig,
  ICF_Result,
} from './@types';
import { checkProvider } from './utils/check-provider';

export function isCloudFunction<
  T extends ICF_ConfigType = ICF_EnumConfigType.BOOLEAN,
>(config?: ICF_IConfig<T>): ICF_Result<T> {
  const isCloudFunction = checkProvider();
  if (config?.type === ICF_EnumConfigType.PROVIDER) {
    return (isCloudFunction ? isCloudFunction : null) as ICF_Result<T>;
  } else {
    return Boolean(isCloudFunction) as ICF_Result<T>;
  }
}
