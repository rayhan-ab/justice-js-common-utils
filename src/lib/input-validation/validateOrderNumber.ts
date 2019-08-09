/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";

export const ValidateOrderNumberErrorType = Enum(
  CommonValidationErrorType.empty,
  CommonValidationErrorType.invalidFormat
);
export type ValidateOrderNumberErrorType = Enum<typeof ValidateOrderNumberErrorType>;

export interface ValidateOrderNumberOptions {
  isRequired?: boolean;
}

export const validateOrderNumber = (value: string, { isRequired = true }: ValidateOrderNumberOptions = {}) => {
  const REGEX = "^O[0-9]{16}$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateOrderNumberErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateOrderNumberErrorType.invalidFormat;
  }

  return null;
};
