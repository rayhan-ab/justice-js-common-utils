import { Enum } from "../../types/types";
export declare const ValidateSeasonPassCodeErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
    alreadyUsed: "alreadyUsed";
}>;
export declare type ValidateSeasonPassCodeErrorType = Enum<typeof ValidateSeasonPassCodeErrorType>;
export interface ValidateSeasonPassCodeOptions {
    isRequired?: boolean;
}
export declare const validateSeasonPassCode: (value: string, { isRequired }?: ValidateSeasonPassCodeOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
