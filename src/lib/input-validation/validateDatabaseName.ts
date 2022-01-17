/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { MAX_SHORT_TEXT_LENGTH } from "./constant/numbers";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateDatabaseNameErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateDatabaseNameErrorType = Enum<typeof ValidateDatabaseNameErrorType>;

export interface ValidateDatabaseNameOptions {
  maxLength?: number;
  isRequired?: boolean;
}

export const validateDatabaseName = (
  value: string,
  { maxLength = MAX_SHORT_TEXT_LENGTH, isRequired = true }: ValidateDatabaseNameOptions = {}
) => {
  const REGEX = "[a-zA-Z0-9_]$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateDatabaseNameErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateDatabaseNameErrorType.invalidFormat;
  }
  return validateLength(value, { max: maxLength });
};
