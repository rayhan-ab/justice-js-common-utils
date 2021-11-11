import { Enum } from "../../types/types";
export declare const ValidateDisplayNameErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateDisplayNameErrorType = Enum<typeof ValidateDisplayNameErrorType>;
export interface ValidateDisplayNameOptions {
    allowUnicode?: boolean;
    isRequired?: boolean;
    strictlyAllowSpecialCharacters?: boolean;
    maxLength?: number;
}
/**
 *
 * @param value
 * @param allowUnicode (true: Allow various language character, false: only allow Alpha Numeric character)
 * @param isRequired
 * @param strictlyAllowSpecialCharacters (true: allow (',. -) in the mid of value, false: Only allow Alpha Numeric)
 * @param maxLength
 *
 * @default allowUnicode false
 * @default isRequired true
 * @default strictlyAllowSpecialCharacters true
 * @default maxLength MAX_DISPLAY_NAME_LENGTH
 */
export declare const validateDisplayName: (value: string, { allowUnicode, isRequired, strictlyAllowSpecialCharacters, maxLength, }?: ValidateDisplayNameOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
