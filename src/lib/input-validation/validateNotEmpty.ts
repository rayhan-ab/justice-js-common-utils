/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";

export const ValidateNotEmptyErrorType = Enum(CommonValidationErrorType.empty);
export type ValidateNotEmptyErrorType = Enum<typeof ValidateNotEmptyErrorType>;

interface Options {
  ignore_whitespace: boolean;
}

export const validateNotEmpty = (value: string, options?: Options) => {
  if (isEmpty(value, options)) {
    return ValidateNotEmptyErrorType.empty;
  }
  return null;
};
