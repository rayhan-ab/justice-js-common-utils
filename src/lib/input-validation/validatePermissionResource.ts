/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidatePermissionResourceErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidatePermissionResourceErrorType = Enum<typeof ValidatePermissionResourceErrorType>;

export interface ValidatePermissionResourceOptions {
  isRequired?: boolean;
}

export const validatePermissionResource = (
  value: string,
  { isRequired = true }: ValidatePermissionResourceOptions = {}
) => {
  const REGEX = "^[A-Z]+([:]{1}([A-Z]+|{[a-zA-Z]+}))*$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidatePermissionResourceErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidatePermissionResourceErrorType.invalidFormat;
  }
  return validateLength(value);
};
