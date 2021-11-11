"use strict";
/*
 * Copyright (c) 2018-2019 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var flat_1 = __importDefault(require("flat"));
var i18next_1 = __importDefault(require("i18next"));
var react_i18next_1 = require("react-i18next");
var config_json_1 = __importDefault(require("./config.json"));
var en_US_json_1 = __importDefault(require("./translations/en-US.json"));
var zh_CN_json_1 = __importDefault(require("./translations/zh-CN.json"));
function isOnBrowser() {
    try {
        if (window) {
            return true;
        }
        // eslint-disable-next-line
    }
    catch (error) {
        console.error(error);
    }
    return false;
}
var loadedLanguages = {
    "en-US": en_US_json_1.default,
    "zh-CN": zh_CN_json_1.default,
};
var languageLocalStorageKey = "i18nextLng";
var availableLanguageCodes = config_json_1.default.languageCodes;
var translationResource = availableLanguageCodes.reduce(function (resources, languageCode) {
    // eslint-disable-next-line no-param-reassign
    resources[languageCode] = {
        // Loading unflattened resource
        translation: flat_1.default.unflatten(loadedLanguages[languageCode]),
    };
    return resources;
}, {});
function getLocalStorageLanguage() {
    if (isOnBrowser()) {
        var currentLanguageCode = localStorage.getItem(languageLocalStorageKey);
        if (currentLanguageCode && availableLanguageCodes.includes(currentLanguageCode)) {
            return currentLanguageCode;
        }
    }
    return config_json_1.default.defaultLanguage;
}
exports.getLocalStorageLanguage = getLocalStorageLanguage;
// @ts-ignore
exports.i18nInstance = i18next_1.default.use(react_i18next_1.initReactI18next).createInstance({
    lng: getLocalStorageLanguage(),
    fallbackLng: config_json_1.default.fallbackLanguage,
    preload: availableLanguageCodes,
    resources: translationResource,
    initImmediate: false,
    debug: process.env.NODE_ENV === "development",
}, 
// tslint:disable-next-line no-empty
function () { }); // Do not remove the callback. It will break the i18n
// tslint:disable-next-line no-any
function t(key, options) {
    return exports.i18nInstance.t(key, options);
}
exports.t = t;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZS1lcnJvci10cmFuc2xhdG9yL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7Ozs7O0FBRUgsOENBQTJCO0FBQzNCLG9EQUE0QztBQUM1QywrQ0FBaUQ7QUFDakQsOERBQW1DO0FBQ25DLHlFQUE2QztBQUM3Qyx5RUFBNkM7QUFFN0MsU0FBUyxXQUFXO0lBQ2xCLElBQUk7UUFDRixJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCwyQkFBMkI7S0FDNUI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxJQUFNLGVBQWUsR0FBaUQ7SUFDcEUsT0FBTyxFQUFFLG9CQUFJO0lBQ2IsT0FBTyxFQUFFLG9CQUFJO0NBQ2QsQ0FBQztBQUNGLElBQU0sdUJBQXVCLEdBQUcsWUFBWSxDQUFDO0FBQzdDLElBQU0sc0JBQXNCLEdBQUcscUJBQU0sQ0FBQyxhQUFhLENBQUM7QUFDcEQsSUFBTSxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxTQUFtQixFQUFFLFlBQW9CO0lBQ2xHLDZDQUE2QztJQUM3QyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUc7UUFDeEIsK0JBQStCO1FBQy9CLFdBQVcsRUFBRSxjQUFPLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUM5RCxDQUFDO0lBQ0YsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRVAsU0FBZ0IsdUJBQXVCO0lBQ3JDLElBQUksV0FBVyxFQUFFLEVBQUU7UUFDakIsSUFBTSxtQkFBbUIsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDMUUsSUFBSSxtQkFBbUIsSUFBSSxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUMvRSxPQUFPLG1CQUFtQixDQUFDO1NBQzVCO0tBQ0Y7SUFDRCxPQUFPLHFCQUFNLENBQUMsZUFBZSxDQUFDO0FBQ2hDLENBQUM7QUFSRCwwREFRQztBQUVELGFBQWE7QUFDQSxRQUFBLFlBQVksR0FBRyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0IsQ0FBQyxDQUFDLGNBQWMsQ0FDdEU7SUFDRSxHQUFHLEVBQUUsdUJBQXVCLEVBQUU7SUFDOUIsV0FBVyxFQUFFLHFCQUFNLENBQUMsZ0JBQWdCO0lBQ3BDLE9BQU8sRUFBRSxzQkFBc0I7SUFDL0IsU0FBUyxFQUFFLG1CQUFtQjtJQUM5QixhQUFhLEVBQUUsS0FBSztJQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssYUFBYTtDQUM5QztBQUNELG9DQUFvQztBQUNwQyxjQUFPLENBQUMsQ0FDVCxDQUFDLENBQUMscURBQXFEO0FBRXhELGtDQUFrQztBQUNsQyxTQUFnQixDQUFDLENBQUMsR0FBVyxFQUFFLE9BQWE7SUFDMUMsT0FBTyxvQkFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUZELGNBRUMifQ==