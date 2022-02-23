export declare type ICFProviderType = 'AWS' | 'GOOGLE' | 'AZURE';
export declare type ICFConfigReturnType = 'boolean' | 'provider';
export declare type ICFResult<T extends ICFConfigReturnType> = T extends ICFProviderType ? ICFProviderType : boolean;
