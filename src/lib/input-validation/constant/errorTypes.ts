/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Enum } from "../../../types/types";

export const ErrorTypes = Enum(
  "empty",
  "lessThanLengthLimit",
  "exceedLengthLimit",
  "invalidOption",
  "invalidFormat",
  "lessThanMinimumValue",
  "exceedMaximumValue",
  "notANumber"
);
