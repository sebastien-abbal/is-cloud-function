import { ICF_EnumProviderType, ICF_ProviderType } from '../@types';

export const providerCheck = (): ICF_ProviderType => {
  if (process.env.LAMBDA_TASK_ROOT && process.env.AWS_EXECUTION_ENV)
    return ICF_EnumProviderType.AWS;
  if (process.env.X_GOOGLE_FUNCTION_NAME) return ICF_EnumProviderType.GOOGLE;
  if (process.env.AzureWebJobsStorage) return ICF_EnumProviderType.AZURE;
  return;
};
