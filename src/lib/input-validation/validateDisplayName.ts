/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateDisplayNameErrorType = ExtendEnum(ValidateLengthErrorType, ErrorTypes.invalidFormat);
export type ValidateDisplayNameErrorType = Enum<typeof ValidateDisplayNameErrorType>;

export const validateDisplayName = (value: string) => {
  const REGEX = "^[a-zA-Z0-9]+(([a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$";
  if (isEmpty(value)) {
    return ValidateDisplayNameErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateDisplayNameErrorType.invalidFormat;
  }
  return validateLength(value);
};
