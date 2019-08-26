/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { MAX_DISPLAY_NAME_LENGTH } from "./constant/numbers";
import { validateLength, ValidateLengthErrorType, ValidateLengthOption } from "./validateLength";

export const ValidatePersonNameErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export type ValidatePersonNameErrorType = Enum<typeof ValidatePersonNameErrorType>;

export interface ValidatePersonNameOptions {
  isRequired?: boolean;
}

export const validatePersonName = (value: string, { isRequired = true }: ValidatePersonNameOptions = {}) => {
  const REGEX = "^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidatePersonNameErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidatePersonNameErrorType.invalidFormat;
  }
  const validateLengthOptions: ValidateLengthOption = { min: 2, max: MAX_DISPLAY_NAME_LENGTH };
  return validateLength(value, validateLengthOptions);
};
