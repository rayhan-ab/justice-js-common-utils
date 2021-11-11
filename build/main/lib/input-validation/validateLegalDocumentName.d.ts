import { Enum } from "../../types/types";
export declare const ValidateLegalDocumentNameErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateLegalDocumentNameErrorType = Enum<typeof ValidateLegalDocumentNameErrorType>;
export interface ValidateLegalDocumentNameOptions {
    isRequired?: boolean;
    maxLength?: number;
}
/**
 *
 * @param value
 * @param isRequired
 * @param maxLength
 *
 * @default isRequired true
 * @default maxLength MAX_SHORT_TEXT_LENGTH
 */
export declare const validateLegalDocumentName: (value: string, { isRequired, maxLength }?: ValidateLegalDocumentNameOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
