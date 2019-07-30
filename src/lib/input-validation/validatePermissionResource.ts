/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidatePermissionResourceErrorType = ExtendEnum(ValidateLengthErrorType, ErrorTypes.invalidFormat);
export type ValidatePermissionResourceErrorType = Enum<typeof ValidatePermissionResourceErrorType>;

export const validatePermissionResource = (value: string) => {
  const REGEX = "^[A-Z]+([:]{1}([A-Z]+|{[a-zA-Z]+}))*$";
  if (isEmpty(value)) {
    return ValidatePermissionResourceErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidatePermissionResourceErrorType.invalidFormat;
  }
  return validateLength(value);
};
