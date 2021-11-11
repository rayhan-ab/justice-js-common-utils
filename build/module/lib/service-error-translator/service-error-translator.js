/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { I18nextProvider, Trans } from "react-i18next";
import { AugmentsAdminErrorTranslationMap } from "./error-translation-map/augments-admin-error-translation-map";
import { BasicAdminErrorTranslationMap } from "./error-translation-map/basic-admin-error-translation-map";
import { BasicErrorTranslationMap } from "./error-translation-map/basic-error-translation-map";
import { EcommerceAdminErrorTranslationMap } from "./error-translation-map/ecommerce-admin-error-translation-map";
import { EcommerceErrorTranslationMap } from "./error-translation-map/ecommerce-error-translation-map";
import { GDPRerrorTranslationMap } from "./error-translation-map/gdpr-error-translation-map";
import { IAMAdminErrorTranslationMap } from "./error-translation-map/iam-admin-error-translation-map";
import { IAMErrorTranslationMap } from "./error-translation-map/iam-error-translation-map";
import { LegalAdminErrorTranslationMap } from "./error-translation-map/legal-admin-error-translation-map";
// tslint:disable-next-line:max-line-length
import { LobbyAndMatchmakingAdminErrorTranslationMap } from "./error-translation-map/lobby-and-matchmaking-admin-error-translation-map";
// tslint:disable-next-line:max-line-length
import { ReportingModerationAdminErrorTranslationMap } from "./error-translation-map/reportingmoderation-admin-error-translation-map";
import { RewardsAdminErrorTranslationMap } from "./error-translation-map/rewards-admin-error-translation-map";
import { SeasonPassAdminErrorTranslationMap } from "./error-translation-map/seasonpass-admin-error-translation-map";
import { StatisticAdminErrorTranslationMap } from "./error-translation-map/statistic-admin-error-translation-map";
import { UgcAdminErrorTranslationMap } from "./error-translation-map/ugc-admin-error-translation-map";
import { getLocalStorageLanguage, i18nInstance } from "./i18n";
// tslint:disable-next-line no-any
var isValidServiceError = function (errorCode) {
    return typeof errorCode === "number";
};
export var ServiceErrorTranslator = function (props) {
    if (isValidServiceError(props.errorCode) && props.errorCode in serviceErrorTranslationMap) {
        return serviceErrorTranslationMap[props.errorCode];
    }
    return null;
};
export var Withi18nProvider = function (_a) {
    var children = _a.children, lang = _a.lang;
    i18nInstance.changeLanguage(lang || getLocalStorageLanguage());
    return React.createElement(I18nextProvider, { i18n: i18nInstance }, children);
};
export var translateServiceError = function (errorCode, lang, defaultMessage) {
    if (isValidServiceError(errorCode) && errorCode in serviceErrorTranslationMap) {
        return React.createElement(Withi18nProvider, { lang: lang }, serviceErrorTranslationMap[errorCode]);
    }
    if (!!defaultMessage) {
        return defaultMessage;
    }
    return (React.createElement(Withi18nProvider, { lang: lang },
        React.createElement(Trans, { i18nKey: "serviceError.unknown" }, "Failed to complete the request")));
};
export var translateServiceErrorForAdmin = function (errorCode, lang, defaultMessage) {
    if (isValidServiceError(errorCode) && errorCode in adminServiceErrorTranslationMap) {
        return React.createElement(Withi18nProvider, { lang: lang }, adminServiceErrorTranslationMap[errorCode]);
    }
    if (!!defaultMessage) {
        return defaultMessage;
    }
    return (React.createElement(Withi18nProvider, { lang: lang },
        React.createElement(Trans, { i18nKey: "serviceError.unknown" }, "Failed to complete the request")));
};
var serviceErrorTranslationMap = Object.freeze(__assign({}, IAMErrorTranslationMap, BasicErrorTranslationMap, EcommerceErrorTranslationMap, GDPRerrorTranslationMap));
var adminServiceErrorTranslationMap = Object.freeze(__assign({}, IAMAdminErrorTranslationMap, StatisticAdminErrorTranslationMap, BasicAdminErrorTranslationMap, EcommerceErrorTranslationMap, EcommerceAdminErrorTranslationMap, LegalAdminErrorTranslationMap, LobbyAndMatchmakingAdminErrorTranslationMap, ReportingModerationAdminErrorTranslationMap, RewardsAdminErrorTranslationMap, UgcAdminErrorTranslationMap, SeasonPassAdminErrorTranslationMap, AugmentsAdminErrorTranslationMap));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1lcnJvci10cmFuc2xhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlLWVycm9yLXRyYW5zbGF0b3Ivc2VydmljZS1lcnJvci10cmFuc2xhdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHOzs7Ozs7Ozs7Ozs7QUFFSCxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNoSCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNsSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMxRywyQ0FBMkM7QUFDM0MsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDeEksMkNBQTJDO0FBQzNDLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ3RJLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzlHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FB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