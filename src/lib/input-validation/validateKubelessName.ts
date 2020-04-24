/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateKubelessNameErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateKubelessNameErrorType = Enum<typeof ValidateKubelessNameErrorType>;

export interface ValidateKubelessNameOptions {
  isRequired?: boolean;
}

export const validateKubelessName = (value: string, { isRequired = true }: ValidateKubelessNameOptions = {}) => {
  const REGEX = "^[a-zA-Z]+(?:([a-zA-Z0-9]+)[-]*[a-zA-Z0-9]+)*$";
  const MAX_KUBELESS_NAME_LENGTH = 64;
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateKubelessNameErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateKubelessNameErrorType.invalidFormat;
  }
  return validateLength(value, { max: MAX_KUBELESS_NAME_LENGTH });
};
