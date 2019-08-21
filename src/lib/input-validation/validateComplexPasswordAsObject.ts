/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthOption } from "./validateLength";

export const ValidateComplexPasswordAsObjectErrorType = Enum(
  CommonValidationErrorType.lessThanLengthLimit,
  CommonValidationErrorType.exceedLengthLimit,
  CommonValidationErrorType.notContainsUpperCaseAndLowerCase,
  CommonValidationErrorType.notContainsLetterAndNumber,
  CommonValidationErrorType.containsTwoCharactersInArrow
);
export type ValidateComplexPasswordAsObjectErrorType = Enum<typeof ValidateComplexPasswordAsObjectErrorType>;

export interface PasswordValidation {
  minLength: null | string;
  maxLength: null | string;
  uppercaseAndLowerCase: null | string;
  letterAndNumber: null | string;
  twoCharactersInArow: null | string;
  isAllValid: boolean;
}

export const Regex = {
  PASSWORD_CONTAIN_LETTER_NUMBER: /^(?=.*[0-9])(?=.*[a-zA-Z])(([a-zA-Z0-9]|[!@#\$%\^&\*])+)$/,
  PASSWORD_CONTAIN_UPPERCASE_LOWECASE: /^(?=.*?[A-Z])(?=.*?[a-z]).{2,}$/,
  PASSWORD_MORE_2_EQUAL_CHARACTERS: /([a-zA-Z0-9])\1{2,}/,
};

// tslint:disable-next-line
export const validateComplexPasswordAsObject = (value: string): PasswordValidation => {
  const validateLengthOptions: ValidateLengthOption = { min: 8, max: 32, isRequired: true };
  const validationLength = validateLength(value, validateLengthOptions);
  const letterAndNumber = Regex.PASSWORD_CONTAIN_LETTER_NUMBER.test(value)
    ? null
    : CommonValidationErrorType.notContainsLetterAndNumber;

  const maxLength =
    validationLength === CommonValidationErrorType.exceedLengthLimit
      ? CommonValidationErrorType.exceedLengthLimit
      : null;
  const minLength =
    validationLength === CommonValidationErrorType.lessThanLengthLimit
      ? CommonValidationErrorType.lessThanLengthLimit
      : null;
  const twoCharactersInArow = !Regex.PASSWORD_MORE_2_EQUAL_CHARACTERS.test(value)
    ? null
    : CommonValidationErrorType.containsTwoCharactersInArrow;
  const uppercaseAndLowerCase = Regex.PASSWORD_CONTAIN_UPPERCASE_LOWECASE.test(value)
    ? null
    : CommonValidationErrorType.notContainsUpperCaseAndLowerCase;
  const isAllValid = !letterAndNumber && !maxLength && !minLength && !twoCharactersInArow && !uppercaseAndLowerCase;
  return {
    isAllValid,
    letterAndNumber,
    maxLength,
    minLength,
    twoCharactersInArow,
    uppercaseAndLowerCase,
  };
};
