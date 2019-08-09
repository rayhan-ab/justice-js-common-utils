/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateMemorySizeErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export type ValidateMemorySizeErrorType = Enum<typeof ValidateMemorySizeErrorType>;

export interface ValidateMemorySizeOptions {
  isRequired?: boolean;
}

export const validateMemorySize = (value: string, { isRequired = true }: ValidateMemorySizeOptions = {}) => {
  const MAX_LENGTH = 9;
  const REGEX = "^[0-9]+Mi$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateMemorySizeErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateMemorySizeErrorType.invalidFormat;
  }
  return validateLength(value, { max: MAX_LENGTH });
};
