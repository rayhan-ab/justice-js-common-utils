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
      Invalid date of birth
    </Trans>,
  20002 :
    <Trans i18nKey="serviceError.20002">
      Validation error
    </Trans>,
  10130 :
    <Trans i18nKey="serviceError.10130">
      User under age
    </Trans>,
  10154 :
    <Trans i18nKey="serviceError.10154">
      Country not found
    </Trans>,
  10133 :
    <Trans i18nKey="serviceError.10133 ">
      Email already used
    </Trans>,
  20007 :
    <Trans i18nKey="serviceError.20007">
      Too many request
    </Trans>,
  20008 :
    <Trans i18nKey="serviceError.20008">
      User not found
    </Trans>,
  10142 :
    <Trans i18nKey="serviceError.10142">
      New password same with old password
    </Trans>,
  10152 :
    <Trans i18nKey="serviceError.10152">
      Verification not found
    </Trans>,
  10137 :
    <Trans i18nKey="serviceError.10137">
      Code expired
    </Trans>,
  10136 :
    <Trans i18nKey="serviceError.10136">
      Verification code already used
    </Trans>,
  10138 :
    <Trans i18nKey="serviceError.10138">
      Code not match
    </Trans>,
  20001 :
    <Trans i18nKey="serviceError.20001">
      	unauthorized access
    </Trans>,
  20013 :
    <Trans i18nKey="serviceError.20013">
      	insufficient permission
    </Trans>,
  10158 :
    <Trans i18nKey="serviceError.10158">
      	ban not found
    </Trans>,
  10456 :
    <Trans i18nKey="serviceError.10456">
      role not found
    </Trans>
  ,

};
