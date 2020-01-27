/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateStatisticCodeErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateStatisticCodeErrorType = Enum<typeof ValidateStatisticCodeErrorType>;

export interface ValidateStatisticCodeOptions {
  isRequired?: boolean;
}

export const validateStatisticCode = (value: string, { isRequired = true }: ValidateStatisticCodeOptions = {}) => {
  const REGEX = "^[a-z0-9]+([-]{0,1}[a-z0-9]+)*$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateStatisticCodeErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateStatisticCodeErrorType.invalidFormat;
  }
  return validateLength(value);
};
