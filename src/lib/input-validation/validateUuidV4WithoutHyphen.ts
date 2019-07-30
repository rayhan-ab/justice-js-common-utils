/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";

export const ValidateUuidV4WithoutHyphenErrorType = Enum(ErrorTypes.empty, ErrorTypes.invalidFormat);
export type ValidateUuidV4WithoutHyphenErrorType = Enum<typeof ValidateUuidV4WithoutHyphenErrorType>;

export const validateUuidV4WithoutHyphen = (value: string) => {
  const REGEX = "^[0-9a-f]{16}[89ab][0-9a-f]{15}$";
  if (isEmpty(value)) {
    return ValidateUuidV4WithoutHyphenErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateUuidV4WithoutHyphenErrorType.invalidFormat;
  }

  return null;
};
