import { Enum } from "../../types/types";
export declare const ValidateNumericErrorType: Readonly<{
    empty: "empty";
    lessThanMinimumValue: "lessThanMinimumValue";
    exceedMaximumValue: "exceedMaximumValue";
    invalidValue: "invalidValue";
    containsDecimal: "containsDecimal";
}>;
export declare type ValidateNumericErrorType = Enum<typeof ValidateNumericErrorType>;
export interface ValidateNumericOption {
    min?: number;
    max?: number;
    isRequired?: boolean;
    excludedNumbers?: number[];
    allowDecimal?: boolean;
}
export declare const validateNumeric: (value: string, { min, max, isRequired, excludedNumbers, allowDecimal, }?: ValidateNumericOption) => "empty" | "lessThanMinimumValue" | "exceedMaximumValue" | "invalidValue" | "containsDecimal" | null;
