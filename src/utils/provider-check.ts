import { ICFProviderType } from '../@types';

export const providerCheck = (): ICFProviderType => {
  console.log(process.env);
  if (process.env.LAMBDA_TASK_ROOT && process.env.AWS_EXECUTION_ENV)
    return 'AWS';
  if (process.env.X_GOOGLE_FUNCTION_NAME) return 'GOOGLE';
  if (process.env.AzureWebJobsStorage) return 'AZURE';
  return;
};
