import { Enum } from "../../types/types";
export declare const ValidateUserNameErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateUserNameErrorType = Enum<typeof ValidateUserNameErrorType>;
export declare const MIN_USERNAME_LENGTH = 3;
export interface ValidateUserNameOptions {
    isRequired?: boolean;
    maxLength?: number;
    minLength?: number;
}
/**
 *
 * @param value
 * @param isRequired
 * @param maxLength
 * @param minLength
 *
 * @default isRequired true
 * @default maxLength MAX_DISPLAY_NAME_LENGTH
 * @default minLength MIN_USERNAME_LENGTH
 */
export declare const validateUserName: (value: string, { isRequired, maxLength, minLength, }?: ValidateUserNameOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
