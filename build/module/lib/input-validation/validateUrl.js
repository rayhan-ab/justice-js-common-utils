/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateUrlErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateUrl = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.allowCustomProtocol, allowCustomProtocol = _d === void 0 ? false : _d;
    var DEFAULT_MAX_URL_LENGTH = 2000;
    var REGEX = 
    // tslint:disable-next-line
    "^((((https?|ftps?|gopher|telnet|nntp):\\/\\/)|(mailto:|news:|orbis:|tel:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:]])?$";
    var isValidUrl = function (url) {
        try {
            return !!new URL(url);
        }
        catch (error) {
            return false;
        }
    };
    var isContainingInvalidPunctuations = function (url) {
        var protocolPunctuation = url.match(/:\/\//g);
        var mainUrlBody;
        if (protocolPunctuation) {
            if (protocolPunctuation.length > 1) {
                return true;
            }
            mainUrlBody = url.slice(url.indexOf("://") + 3);
        }
        else {
            mainUrlBody = url;
        }
        return /[^a-zA-Z0-9_-]{3,}|[{}|`~,\\]/.test(mainUrlBody);
    };
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateUrlErrorType.empty;
    }
    if (isContainingInvalidPunctuations(value)) {
        return ValidateUrlErrorType.invalidFormat;
    }
    if (allowCustomProtocol && !isValidUrl(value)) {
        return ValidateUrlErrorType.invalidFormat;
    }
    if (!allowCustomProtocol && !matches(value, REGEX)) {
        return ValidateUrlErrorType.invalidFormat;
    }
    return validateLength(value, { max: DEFAULT_MAX_URL_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVVcmwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVVcmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBUSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsVUFBVSxDQUFDLHVCQUF1QixFQUFFLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBUWpILE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRyxVQUN6QixLQUFhLEVBQ2IsRUFBMkU7UUFBM0UsNEJBQTJFLEVBQXpFLGtCQUFpQixFQUFqQixzQ0FBaUIsRUFBRSwyQkFBMkIsRUFBM0IsZ0RBQTJCO0lBRWhELElBQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLElBQU0sS0FBSztJQUNULDJCQUEyQjtJQUMzQix3SkFBd0osQ0FBQztJQUUzSixJQUFNLFVBQVUsR0FBRyxVQUFDLEdBQVc7UUFDN0IsSUFBSTtZQUNGLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQyxDQUFDO0lBRUYsSUFBTSwrQkFBK0IsR0FBRyxVQUFDLEdBQVc7UUFDbEQsSUFBTSxtQkFBbUIsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksV0FBVyxDQUFDO1FBRWhCLElBQUksbUJBQW1CLEVBQUU7WUFDdkIsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsV0FBVyxHQUFHLEdBQUcsQ0FBQztTQUNuQjtRQUVELE9BQU8sK0JBQStCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQztJQUVGLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7S0FDbkM7SUFFRCxJQUFJLCtCQUErQixDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzFDLE9BQU8sb0JBQW9CLENBQUMsYUFBYSxDQUFDO0tBQzNDO0lBRUQsSUFBSSxtQkFBbUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM3QyxPQUFPLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztLQUMzQztJQUVELElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDbEQsT0FBTyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7S0FDM0M7SUFFRCxPQUFPLGNBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQyJ9