/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";

export const ValidateComplexPasswordErrorType = Enum(ErrorTypes.empty, ErrorTypes.invalidFormat);
export type ValidateComplexPasswordErrorType = Enum<typeof ValidateComplexPasswordErrorType>;

export const validateComplexPassword = (value: string) => {
  const REGEX =
    // tslint:disable-next-line
    '^(?:(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\\1{2,})[A-Za-z0-9!~<>,;:_=?*+#."&§%°()\\|\\[\\]\\-\\$\\^\\@\\/]{8,32}$';
  if (isEmpty(value)) {
    return ValidateComplexPasswordErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateComplexPasswordErrorType.invalidFormat;
  }

  return null;
};
