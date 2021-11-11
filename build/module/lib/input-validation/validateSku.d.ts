import { Enum } from "../../types/types";
export declare const ValidateSkuErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateSkuErrorType = Enum<typeof ValidateSkuErrorType>;
export interface ValidateSkuOptions {
    isRequired?: boolean;
    maxLength?: number;
}
export declare const validateSku: (value: string, { isRequired, maxLength }?: ValidateSkuOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
