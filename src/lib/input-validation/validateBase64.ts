/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";

export const ValidateBase64ErrorType = Enum(CommonValidationErrorType.empty, CommonValidationErrorType.invalidFormat);
export type ValidateBase64ErrorType = Enum<typeof ValidateBase64ErrorType>;

export interface ValidateBase64Options {
  isRequired?: boolean;
}

export const validateBase64 = (value: string, { isRequired = true }: ValidateBase64Options = {}) => {
  const REGEX = "^[A-Za-z0-9+/]+={0,2}$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateBase64ErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateBase64ErrorType.invalidFormat;
  }

  return null;
};
