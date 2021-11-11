import { Enum } from "../../types/types";
export declare const ValidateChannelNameErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateChannelNameErrorType = Enum<typeof ValidateChannelNameErrorType>;
export interface ValidateChannelNameOptions {
    isRequired?: boolean;
}
export declare const validateChannelName: (value: string, { isRequired }?: ValidateChannelNameOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
