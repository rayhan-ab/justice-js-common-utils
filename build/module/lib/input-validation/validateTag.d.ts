import { Enum } from "../../types/types";
export declare const ValidateTagErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateTagErrorType = Enum<typeof ValidateTagErrorType>;
export interface ValidateTagOptions {
    isRequired?: boolean;
}
export declare const validateTag: (value: string, { isRequired }?: ValidateTagOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
