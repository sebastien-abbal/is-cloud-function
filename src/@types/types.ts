export type ICF_ProviderType = 'AWS' | 'GOOGLE' | 'AZURE';

export type ICF_ConfigType = 'PROVIDER' | 'BOOLEAN';

export type ICF_Result<T> = T extends 'BOOLEAN' ? boolean : ICF_ProviderType;
