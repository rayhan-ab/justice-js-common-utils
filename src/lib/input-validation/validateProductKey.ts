/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateProductKeyErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export type ValidateProductKeyErrorType = Enum<typeof ValidateProductKeyErrorType>;

export interface ValidateProductKeyOptions {
  isRequired?: boolean;
  max?: number;
}

const MAX_LENGTH = 120;

export const validateProductKey = (
  value: string,
  { isRequired = true, max = MAX_LENGTH }: ValidateProductKeyOptions = {}
) => {
  const REGEX = "^([a-z0-9]+)(_?[a-z0-9])*$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateProductKeyErrorType.empty;
  }
  if (!matches(value, REGEX) && value.length <= max) {
    return ValidateProductKeyErrorType.invalidFormat;
  }
  return validateLength(value, { max });
};
