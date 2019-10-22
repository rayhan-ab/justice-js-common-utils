/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateStatisticTagErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateStatisticTagErrorType = Enum<typeof ValidateStatisticTagErrorType>;

export interface ValidateStatisticTagOptions {
  isRequired?: boolean;
}

export const validateStatisticTag = (value: string, { isRequired = true }: ValidateStatisticTagOptions = {}) => {
  const MAX_LENGTH = 36;
  const REGEX = "^[a-zA-Z0-9]+([_]{1}[a-zA-Z0-9]+)*$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateStatisticTagErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateStatisticTagErrorType.invalidFormat;
  }
  return validateLength(value, { max: MAX_LENGTH });
};
