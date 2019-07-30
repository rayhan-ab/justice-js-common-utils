/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateTemplateSlugErrorType = ExtendEnum(ValidateLengthErrorType, ErrorTypes.invalidFormat);
export type ValidateTemplateSlugErrorType = Enum<typeof ValidateTemplateSlugErrorType>;

export const validateTemplateSlug = (value: string) => {
  const REGEX = "^[a-zA-Z]+([-]{1}[a-zA-Z]+)*$";
  if (isEmpty(value)) {
    return ValidateTemplateSlugErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateTemplateSlugErrorType.invalidFormat;
  }
  return validateLength(value);
};
