/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateKubelessHandlerErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateKubelessHandlerErrorType = Enum<typeof ValidateKubelessHandlerErrorType>;

export interface ValidateKubelessHandlerOptions {
  isRequired?: boolean;
}

export const validateKubelessHandler = (value: string, { isRequired = true }: ValidateKubelessHandlerOptions = {}) => {
  const REGEX = "[a-zA-Z0-9_]$";
  const MAX_HANDLER_LENGTH = 256;
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateKubelessHandlerErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateKubelessHandlerErrorType.invalidFormat;
  }
  return validateLength(value, { max: MAX_HANDLER_LENGTH });
};
