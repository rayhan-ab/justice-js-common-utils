/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { matches } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";

export const ValidateRegexErrorType = Enum(CommonValidationErrorType.invalidFormat);
export type ValidateRegexErrorType = Enum<typeof ValidateRegexErrorType>;

export const validateRegex = (value: string, regex: string) => {
  if (!matches(value, regex)) {
    return ValidateRegexErrorType.invalidFormat;
  }

  return null;
};
