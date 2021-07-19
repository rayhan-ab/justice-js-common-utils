/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { Trans } from "react-i18next";

export const SeasonPassAdminErrorTranslationMap: { [key: string]: React.ReactNode } = {
  49122: <Trans i18nKey="adminServiceError.49122">Invalid time range</Trans>,
  49173: <Trans i18nKey="adminServiceError.49173">Reward code already exists in the Season</Trans>,
  49179: <Trans i18nKey="adminServiceError.49179">Failed to delete reward. The Reward is in use.</Trans>,
};
