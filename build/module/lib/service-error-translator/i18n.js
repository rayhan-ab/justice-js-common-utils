/*
 * Copyright (c) 2018-2019 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import flatten from "flat";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import config from "./config.json";
import enUS from "./translations/en-US.json";
import zhCN from "./translations/zh-CN.json";
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
    "en-US": enUS,
    "zh-CN": zhCN,
};
var languageLocalStorageKey = "i18nextLng";
var availableLanguageCodes = config.languageCodes;
var translationResource = availableLanguageCodes.reduce(function (resources, languageCode) {
    // eslint-disable-next-line no-param-reassign
    resources[languageCode] = {
        // Loading unflattened resource
        translation: flatten.unflatten(loadedLanguages[languageCode]),
    };
    return resources;
}, {});
export function getLocalStorageLanguage() {
    if (isOnBrowser()) {
        var currentLanguageCode = localStorage.getItem(languageLocalStorageKey);
        if (currentLanguageCode && availableLanguageCodes.includes(currentLanguageCode)) {
            return currentLanguageCode;
        }
    }
    return config.defaultLanguage;
}
// @ts-ignore
export var i18nInstance = i18next.use(initReactI18next).createInstance({
    lng: getLocalStorageLanguage(),
    fallbackLng: config.fallbackLanguage,
    preload: availableLanguageCodes,
    resources: translationResource,
    initImmediate: false,
    debug: process.env.NODE_ENV === "development",
}, 
// tslint:disable-next-line no-empty
function () { }); // Do not remove the callback. It will break the i18n
// tslint:disable-next-line no-any
export function t(key, options) {
    return i18nInstance.t(key, options);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZS1lcnJvci10cmFuc2xhdG9yL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sT0FBTyxNQUFNLE1BQU0sQ0FBQztBQUMzQixPQUFPLE9BQXFCLE1BQU0sU0FBUyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLE1BQU0sTUFBTSxlQUFlLENBQUM7QUFDbkMsT0FBTyxJQUFJLE1BQU0sMkJBQTJCLENBQUM7QUFDN0MsT0FBTyxJQUFJLE1BQU0sMkJBQTJCLENBQUM7QUFFN0MsU0FBUyxXQUFXO0lBQ2xCLElBQUk7UUFDRixJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCwyQkFBMkI7S0FDNUI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxJQUFNLGVBQWUsR0FBaUQ7SUFDcEUsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFDRixJQUFNLHVCQUF1QixHQUFHLFlBQVksQ0FBQztBQUM3QyxJQUFNLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7QUFDcEQsSUFBTSxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxTQUFtQixFQUFFLFlBQW9CO0lBQ2xHLDZDQUE2QztJQUM3QyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUc7UUFDeEIsK0JBQStCO1FBQy9CLFdBQVcsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUM5RCxDQUFDO0lBQ0YsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRVAsTUFBTSxVQUFVLHVCQUF1QjtJQUNyQyxJQUFJLFdBQVcsRUFBRSxFQUFFO1FBQ2pCLElBQU0sbUJBQW1CLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzFFLElBQUksbUJBQW1CLElBQUksc0JBQXNCLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDL0UsT0FBTyxtQkFBbUIsQ0FBQztTQUM1QjtLQUNGO0lBQ0QsT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDO0FBQ2hDLENBQUM7QUFFRCxhQUFhO0FBQ2IsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxjQUFjLENBQ3RFO0lBQ0UsR0FBRyxFQUFFLHVCQUF1QixFQUFFO0lBQzlCLFdBQVcsRUFBRSxNQUFNLENBQUMsZ0JBQWdCO0lBQ3BDLE9BQU8sRUFBRSxzQkFBc0I7SUFDL0IsU0FBUyxFQUFFLG1CQUFtQjtJQUM5QixhQUFhLEVBQUUsS0FBSztJQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssYUFBYTtDQUM5QztBQUNELG9DQUFvQztBQUNwQyxjQUFPLENBQUMsQ0FDVCxDQUFDLENBQUMscURBQXFEO0FBRXhELGtDQUFrQztBQUNsQyxNQUFNLFVBQVUsQ0FBQyxDQUFDLEdBQVcsRUFBRSxPQUFhO0lBQzFDLE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEMsQ0FBQyJ9