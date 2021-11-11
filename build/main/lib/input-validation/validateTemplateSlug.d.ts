import { Enum } from "../../types/types";
export declare const ValidateTemplateSlugErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateTemplateSlugErrorType = Enum<typeof ValidateTemplateSlugErrorType>;
export interface ValidateTemplateSlugOptions {
    isRequired?: boolean;
}
export declare const validateTemplateSlug: (value: string, { isRequired }?: ValidateTemplateSlugOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
