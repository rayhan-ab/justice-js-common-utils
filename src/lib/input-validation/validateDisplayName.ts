/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import XRegExp from "xregexp";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { MAX_DISPLAY_NAME_LENGTH } from "./constant/numbers";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateDisplayNameErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateDisplayNameErrorType = Enum<typeof ValidateDisplayNameErrorType>;

export interface ValidateDisplayNameOptions {
  allowUnicode?: boolean;
  isRequired?: boolean;
  strictlyAllowSpecialCharacters?: boolean;
  maxLength?: number;
}

/**
 *
 * @param value
 * @param allowUnicode (true: Allow various language character, false: only allow Alpha Numeric character)
 * @param isRequired
 * @param strictlyAllowSpecialCharacters (true: allow (',. -) in the mid of value, false: Only allow Alpha Numeric)
 * @param maxLength
 *
 * @default allowUnicode false
 * @default isRequired true
 * @default strictlyAllowSpecialCharacters true
 * @default maxLength MAX_DISPLAY_NAME_LENGTH
 */
export const validateDisplayName = (
  value: string,
  {
    allowUnicode = false,
    isRequired = true,
    strictlyAllowSpecialCharacters = true,
    maxLength = MAX_DISPLAY_NAME_LENGTH,
  }: ValidateDisplayNameOptions = {}
) => {
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateDisplayNameErrorType.empty;
  }

  if (allowUnicode && !strictlyAllowSpecialCharacters && !XRegExp("^[\\pL\\pN\\pM]*$").test(value)) {
    return ValidateDisplayNameErrorType.invalidFormat;
  }

  if (
    allowUnicode &&
    strictlyAllowSpecialCharacters &&
    !XRegExp("^[\\pL\\pN\\pM]+([',. -][\\pL\\pN]+)*$").test(value)
  ) {
    return ValidateDisplayNameErrorType.invalidFormat;
  }

  if (!allowUnicode && !strictlyAllowSpecialCharacters && !matches(value, /^\w*$/g)) {
    return ValidateDisplayNameErrorType.invalidFormat;
  }

  if (!allowUnicode && strictlyAllowSpecialCharacters && !matches(value, "^\\w+([',. -]\\w+)*$")) {
    return ValidateDisplayNameErrorType.invalidFormat;
  }

  return validateLength(value, {
    max: maxLength,
  });
};
