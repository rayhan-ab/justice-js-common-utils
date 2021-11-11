import { Enum } from "../../types/types";
export declare const ValidateStatisticTagErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateStatisticTagErrorType = Enum<typeof ValidateStatisticTagErrorType>;
export interface ValidateStatisticTagOptions {
    isRequired?: boolean;
}
export declare const validateStatisticTag: (value: string, { isRequired }?: ValidateStatisticTagOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
