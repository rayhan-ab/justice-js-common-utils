import { Enum } from "../../types/types";
export declare const ValidateStatisticCodeErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
    alreadyUsed: "alreadyUsed";
}>;
export declare type ValidateStatisticCodeErrorType = Enum<typeof ValidateStatisticCodeErrorType>;
export interface ValidateStatisticCodeOptions {
    isRequired?: boolean;
}
export declare const validateStatisticCode: (value: string, { isRequired }?: ValidateStatisticCodeOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
