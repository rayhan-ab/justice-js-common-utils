/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateCpuSizeErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export type ValidateCpuSizeErrorType = Enum<typeof ValidateCpuSizeErrorType>;

export interface ValidateCpuSizeOptions {
  isRequired?: boolean;
}

export const validateCpuSize = (value: string, { isRequired = true }: ValidateCpuSizeOptions = {}) => {
  const MAX_LENGTH = 8;
  const REGEX = "^[0-9]+m$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateCpuSizeErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateCpuSizeErrorType.invalidFormat;
  }
  return validateLength(value, { max: MAX_LENGTH });
};
