export type ICFProviderType = 'AWS' | 'GOOGLE' | 'AZURE';

export type ICFConfigReturnType = 'boolean' | 'provider';

export type ICFResult<T extends ICFConfigReturnType> = T extends ICFProviderType
  ? ICFProviderType
  : boolean;
