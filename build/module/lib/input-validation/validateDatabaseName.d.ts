import { Enum } from "../../types/types";
export declare const ValidateDatabaseNameErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateDatabaseNameErrorType = Enum<typeof ValidateDatabaseNameErrorType>;
export interface ValidateDatabaseNameOptions {
    maxLength?: number;
    isRequired?: boolean;
}
export declare const validateDatabaseName: (value: string, { maxLength, isRequired }?: ValidateDatabaseNameOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
