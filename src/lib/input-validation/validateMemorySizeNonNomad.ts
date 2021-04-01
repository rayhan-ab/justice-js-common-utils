/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

// tslint:disable-next-line:max-line-length
export const ValidateMemorySizeNonNomadErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateMemorySizeNonNomadErrorType = Enum<typeof ValidateMemorySizeNonNomadErrorType>;

export interface ValidateMemorySizeNonNomadOptions {
  isRequired?: boolean;
}
// tslint:disable-next-line:max-line-length
export const validateMemorySizeNonNomad = (
  value: string,
  { isRequired = true }: ValidateMemorySizeNonNomadOptions = {}
) => {
  const MAX_LENGTH = 9;
  const REGEX = "^[0-9]+Mi$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateMemorySizeNonNomadErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateMemorySizeNonNomadErrorType.invalidFormat;
  }
  return validateLength(value, { max: MAX_LENGTH });
};
