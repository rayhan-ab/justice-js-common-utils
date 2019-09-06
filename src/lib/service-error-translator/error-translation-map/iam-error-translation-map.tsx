/* 
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { Trans } from "react-i18next";

export const IAMErrorTranslationMap : { [key: string]: React.ReactNode }= {
  20019 :
    <Trans i18nKey="serviceError.20019">
      Unable to parse request body
    </Trans>,
  10131 :
    <Trans i18nKey="serviceError.10131">
      invalid date of birth
    </Trans>,
  20002 :
    <Trans i18nKey="serviceError.20002">
      validation error
    </Trans>,
  10130 :
    <Trans i18nKey="serviceError.10130">
      user under age
    </Trans>,
  10154 :
    <Trans i18nKey="serviceError.10154">
      country not found
    </Trans>,
  10133 :
    <Trans i18nKey="serviceError.10133 ">
      email already used
    </Trans>,
  20007 :
    <Trans i18nKey="serviceError.20007">
      too many request
    </Trans>,
  20008 :
    <Trans i18nKey="serviceError.20008">
      user not found
    </Trans>,
};
