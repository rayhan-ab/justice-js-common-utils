import { Enum } from "../../../types/types";
export declare type CommonValidationErrorType = Enum<typeof CommonValidationErrorType>;
export declare const CommonValidationErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
    invalidFormat: "invalidFormat";
    lessThanMinimumValue: "lessThanMinimumValue";
    exceedMaximumValue: "exceedMaximumValue";
    invalidValue: "invalidValue";
    notContainsLetterAndNumber: "notContainsLetterAndNumber";
    notContainsUpperCaseAndLowerCase: "notContainsUpperCaseAndLowerCase";
    containsTwoCharactersInArrow: "containsTwoCharactersInArrow";
    containsBadWords: "containsBadWords";
    containsDecimal: "containsDecimal";
    invalidFileExtensions: "invalidFileExtensions";
    exceedMaximumFileSize: "exceedMaximumFileSize";
    alreadyUsed: "alreadyUsed";
}>;
export declare type ThrownErrorType = Enum<typeof ThrownErrorType>;
export declare const ThrownErrorType: Readonly<{
    invalidOption: "invalidOption";
}>;
