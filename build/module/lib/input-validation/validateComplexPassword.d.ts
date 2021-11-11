import { Enum } from "../../types/types";
export declare const ValidateComplexPasswordErrorType: Readonly<{
    empty: "empty";
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateComplexPasswordErrorType = Enum<typeof ValidateComplexPasswordErrorType>;
export interface ValidateComplexPasswordOptions {
    isRequired?: boolean;
}
export declare const validateComplexPassword: (value: string, { isRequired }?: ValidateComplexPasswordOptions) => "empty" | "invalidFormat" | null;
