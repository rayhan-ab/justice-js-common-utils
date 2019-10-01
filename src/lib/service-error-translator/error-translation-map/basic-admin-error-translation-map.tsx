/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { Trans } from "react-i18next";

export const IAMAdminErrorTranslationMap: { [key: string]: React.ReactNode } = {
  11234: <Trans i18nKey="adminServiceError.11234">Country belongs to more than one group</Trans>,
  11233: <Trans i18nKey="adminServiceError.11233">Country group does not exist</Trans>,
  11337: <Trans i18nKey="adminServiceError.11337">Namespace does not exist</Trans>,
  11440: <Trans i18nKey="adminServiceError.11440">User profile does not exist</Trans>,
  11540: <Trans i18nKey="adminServiceError.11540">User profile does not exist</Trans>,
  11132: <Trans i18nKey="adminServiceError.11132">You've reached the maximum upload limit</Trans>,
  11235: <Trans i18nKey="adminServiceError.11235">Country group already exists</Trans>,
  11336: <Trans i18nKey="adminServiceError.11336">Namespace already exists</Trans>,
  20000: <Trans i18nKey="adminServiceError.20000">Something went wrong. Please contact Administrator.</Trans>,
  20006: (
    <Trans i18nKey="adminServiceError.20006">
      The item is already updated by another admin. Please refresh the page.
    </Trans>
  ),
};
