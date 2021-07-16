/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateSeasonPassCodeErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat,
  CommonValidationErrorType.alreadyUsed
);
export type ValidateSeasonPassCodeErrorType = Enum<typeof ValidateSeasonPassCodeErrorType>;

export interface ValidateSeasonPassCodeOptions {
  isRequired?: boolean;
}

export const validateSeasonPassCode = (value: string, { isRequired = true }: ValidateSeasonPassCodeOptions = {}) => {
  const REGEX = "^[a-z0-9]+([_:-]{1}[a-z0-9]+)*$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateSeasonPassCodeErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateSeasonPassCodeErrorType.invalidFormat;
  }
  return validateLength(value);
};
