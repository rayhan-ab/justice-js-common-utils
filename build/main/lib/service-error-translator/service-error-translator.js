"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_i18next_1 = require("react-i18next");
var augments_admin_error_translation_map_1 = require("./error-translation-map/augments-admin-error-translation-map");
var basic_admin_error_translation_map_1 = require("./error-translation-map/basic-admin-error-translation-map");
var basic_error_translation_map_1 = require("./error-translation-map/basic-error-translation-map");
var ecommerce_admin_error_translation_map_1 = require("./error-translation-map/ecommerce-admin-error-translation-map");
var ecommerce_error_translation_map_1 = require("./error-translation-map/ecommerce-error-translation-map");
var gdpr_error_translation_map_1 = require("./error-translation-map/gdpr-error-translation-map");
var iam_admin_error_translation_map_1 = require("./error-translation-map/iam-admin-error-translation-map");
var iam_error_translation_map_1 = require("./error-translation-map/iam-error-translation-map");
var legal_admin_error_translation_map_1 = require("./error-translation-map/legal-admin-error-translation-map");
// tslint:disable-next-line:max-line-length
var lobby_and_matchmaking_admin_error_translation_map_1 = require("./error-translation-map/lobby-and-matchmaking-admin-error-translation-map");
// tslint:disable-next-line:max-line-length
var reportingmoderation_admin_error_translation_map_1 = require("./error-translation-map/reportingmoderation-admin-error-translation-map");
var rewards_admin_error_translation_map_1 = require("./error-translation-map/rewards-admin-error-translation-map");
var seasonpass_admin_error_translation_map_1 = require("./error-translation-map/seasonpass-admin-error-translation-map");
var statistic_admin_error_translation_map_1 = require("./error-translation-map/statistic-admin-error-translation-map");
var ugc_admin_error_translation_map_1 = require("./error-translation-map/ugc-admin-error-translation-map");
var i18n_1 = require("./i18n");
// tslint:disable-next-line no-any
var isValidServiceError = function (errorCode) {
    return typeof errorCode === "number";
};
exports.ServiceErrorTranslator = function (props) {
    if (isValidServiceError(props.errorCode) && props.errorCode in serviceErrorTranslationMap) {
        return serviceErrorTranslationMap[props.errorCode];
    }
    return null;
};
exports.Withi18nProvider = function (_a) {
    var children = _a.children, lang = _a.lang;
    i18n_1.i18nInstance.changeLanguage(lang || i18n_1.getLocalStorageLanguage());
    return React.createElement(react_i18next_1.I18nextProvider, { i18n: i18n_1.i18nInstance }, children);
};
exports.translateServiceError = function (errorCode, lang, defaultMessage) {
    if (isValidServiceError(errorCode) && errorCode in serviceErrorTranslationMap) {
        return React.createElement(exports.Withi18nProvider, { lang: lang }, serviceErrorTranslationMap[errorCode]);
    }
    if (!!defaultMessage) {
        return defaultMessage;
    }
    return (React.createElement(exports.Withi18nProvider, { lang: lang },
        React.createElement(react_i18next_1.Trans, { i18nKey: "serviceError.unknown" }, "Failed to complete the request")));
};
exports.translateServiceErrorForAdmin = function (errorCode, lang, defaultMessage) {
    if (isValidServiceError(errorCode) && errorCode in adminServiceErrorTranslationMap) {
        return React.createElement(exports.Withi18nProvider, { lang: lang }, adminServiceErrorTranslationMap[errorCode]);
    }
    if (!!defaultMessage) {
        return defaultMessage;
    }
    return (React.createElement(exports.Withi18nProvider, { lang: lang },
        React.createElement(react_i18next_1.Trans, { i18nKey: "serviceError.unknown" }, "Failed to complete the request")));
};
var serviceErrorTranslationMap = Object.freeze(__assign({}, iam_error_translation_map_1.IAMErrorTranslationMap, basic_error_translation_map_1.BasicErrorTranslationMap, ecommerce_error_translation_map_1.EcommerceErrorTranslationMap, gdpr_error_translation_map_1.GDPRerrorTranslationMap));
var adminServiceErrorTranslationMap = Object.freeze(__assign({}, iam_admin_error_translation_map_1.IAMAdminErrorTranslationMap, statistic_admin_error_translation_map_1.StatisticAdminErrorTranslationMap, basic_admin_error_translation_map_1.BasicAdminErrorTranslationMap, ecommerce_error_translation_map_1.EcommerceErrorTranslationMap, ecommerce_admin_error_translation_map_1.EcommerceAdminErrorTranslationMap, legal_admin_error_translation_map_1.LegalAdminErrorTranslationMap, lobby_and_matchmaking_admin_error_translation_map_1.LobbyAndMatchmakingAdminErrorTranslationMap, reportingmoderation_admin_error_translation_map_1.ReportingModerationAdminErrorTranslationMap, rewards_admin_error_translation_map_1.RewardsAdminErrorTranslationMap, ugc_admin_error_translation_map_1.UgcAdminErrorTranslationMap, seasonpass_admin_error_translation_map_1.SeasonPassAdminErrorTranslationMap, augments_admin_error_translation_map_1.AugmentsAdminErrorTranslationMap));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1lcnJvci10cmFuc2xhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlLWVycm9yLXRyYW5zbGF0b3Ivc2VydmljZS1lcnJvci10cmFuc2xhdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCwyQ0FBK0I7QUFDL0IsK0NBQXVEO0FBQ3ZELHFIQUFnSDtBQUNoSCwrR0FBMEc7QUFDMUcsbUdBQStGO0FBQy9GLHVIQUFrSDtBQUNsSCwyR0FBdUc7QUFDdkcsaUdBQTZGO0FBQzdGLDJHQUFzRztBQUN0RywrRkFBMkY7QUFDM0YsK0dBQTBHO0FBQzFHLDJDQUEyQztBQUMzQywrSUFBd0k7QUFDeEksMkNBQTJDO0FBQzNDLDJJQUFzSTtBQUN0SSxtSEFBOEc7QUFDOUcseUhBQW9IO0FBQ3BILHVIQUFrSDtBQUNsSCwyR0FBc0c7QUFDdEcsK0JBQStEO0FBTS9ELGtDQUFrQztBQUNsQyxJQUFNLG1CQUFtQixHQUFHLFVBQUMsU0FBaUI7SUFDNUMsT0FBTyxPQUFPLFNBQVMsS0FBSyxRQUFRLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBRVcsUUFBQSxzQkFBc0IsR0FBRyxVQUFDLEtBQXdCO0lBQzdELElBQUksbUJBQW1CLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksMEJBQTBCLEVBQUU7UUFDekYsT0FBTywwQkFBMEIsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDcEQ7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVXLFFBQUEsZ0JBQWdCLEdBQUcsVUFBQyxFQUFnRTtRQUE5RCxzQkFBUSxFQUFFLGNBQUk7SUFDL0MsbUJBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLDhCQUF1QixFQUFFLENBQUMsQ0FBQztJQUMvRCxPQUFPLG9CQUFDLCtCQUFlLElBQUMsSUFBSSxFQUFFLG1CQUFZLElBQUcsUUFBUSxDQUFtQixDQUFDO0FBQzNFLENBQUMsQ0FBQztBQUVXLFFBQUEscUJBQXFCLEdBQUcsVUFBQyxTQUFpQixFQUFFLElBQWEsRUFBRSxjQUFnQztJQUN0RyxJQUFJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsSUFBSSwwQkFBMEIsRUFBRTtRQUM3RSxPQUFPLG9CQUFDLHdCQUFnQixJQUFDLElBQUksRUFBRSxJQUFJLElBQUcsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQW9CLENBQUM7S0FDakc7SUFDRCxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUU7UUFDcEIsT0FBTyxjQUFjLENBQUM7S0FDdkI7SUFDRCxPQUFPLENBQ0wsb0JBQUMsd0JBQWdCLElBQUMsSUFBSSxFQUFFLElBQUk7UUFDMUIsb0JBQUMscUJBQUssSUFBQyxPQUFPLEVBQUMsc0JBQXNCLHFDQUF1QyxDQUMzRCxDQUNwQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRVcsUUFBQSw2QkFBNkIsR0FBRyxVQUFDLFNBQWlCLEVBQUUsSUFBYSxFQUFFLGNBQWdDO0lBQzlHLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxJQUFJLCtCQUErQixFQUFFO1FBQ2xGLE9BQU8sb0JBQUMsd0JBQWdCLElBQUMsSUFBSSxFQUFFLElBQUksSUFBRywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsQ0FBb0IsQ0FBQztLQUN0RztJQUNELElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRTtRQUNwQixPQUFPLGNBQWMsQ0FBQztLQUN2QjtJQUNELE9BQU8sQ0FDTCxvQkFBQyx3QkFBZ0IsSUFBQyxJQUFJLEVBQUUsSUFBSTtRQUMxQixvQkFBQyxxQkFBSyxJQUFDLE9BQU8sRUFBQyxzQkFBc0IscUNBQXVDLENBQzNELENBQ3BCLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixJQUFNLDBCQUEwQixHQUF1QyxNQUFNLENBQUMsTUFBTSxjQUMvRSxrREFBc0IsRUFDdEIsc0RBQXdCLEVBQ3hCLDhEQUE0QixFQUM1QixvREFBdUIsRUFDMUIsQ0FBQztBQUVILElBQU0sK0JBQStCLEdBQXVDLE1BQU0sQ0FBQyxNQUFNLGNBQ3BGLDZEQUEyQixFQUMzQix5RUFBaUMsRUFDakMsaUVBQTZCLEVBQzdCLDhEQUE0QixFQUM1Qix5RUFBaUMsRUFDakMsaUVBQTZCLEVBQzdCLCtGQUEyQyxFQUMzQyw2RkFBMkMsRUFDM0MscUVBQStCLEVBQy9CLDZEQUEyQixFQUMzQiwyRUFBa0MsRUFDbEMsdUVBQWdDLEVBQ25DLENBQUMifQ==