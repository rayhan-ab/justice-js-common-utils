"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("validator");
var types_1 = require("../../types/types");
var errorType_1 = require("./constant/errorType");
var validateLength_1 = require("./validateLength");
exports.ValidateUrlErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateUrl = function (value, _a) {
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
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateUrlErrorType.empty;
    }
    if (isContainingInvalidPunctuations(value)) {
        return exports.ValidateUrlErrorType.invalidFormat;
    }
    if (allowCustomProtocol && !isValidUrl(value)) {
        return exports.ValidateUrlErrorType.invalidFormat;
    }
    if (!allowCustomProtocol && !validator_1.matches(value, REGEX)) {
        return exports.ValidateUrlErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: DEFAULT_MAX_URL_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVVcmwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVVcmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsbURBQTJFO0FBRTlELFFBQUEsb0JBQW9CLEdBQUcsa0JBQVUsQ0FBQyx3Q0FBdUIsRUFBRSxxQ0FBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQVFwRyxRQUFBLFdBQVcsR0FBRyxVQUN6QixLQUFhLEVBQ2IsRUFBMkU7UUFBM0UsNEJBQTJFLEVBQXpFLGtCQUFpQixFQUFqQixzQ0FBaUIsRUFBRSwyQkFBMkIsRUFBM0IsZ0RBQTJCO0lBRWhELElBQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLElBQU0sS0FBSztJQUNULDJCQUEyQjtJQUMzQix3SkFBd0osQ0FBQztJQUUzSixJQUFNLFVBQVUsR0FBRyxVQUFDLEdBQVc7UUFDN0IsSUFBSTtZQUNGLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQyxDQUFDO0lBRUYsSUFBTSwrQkFBK0IsR0FBRyxVQUFDLEdBQVc7UUFDbEQsSUFBTSxtQkFBbUIsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksV0FBVyxDQUFDO1FBRWhCLElBQUksbUJBQW1CLEVBQUU7WUFDdkIsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsV0FBVyxHQUFHLEdBQUcsQ0FBQztTQUNuQjtRQUVELE9BQU8sK0JBQStCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQztJQUVGLElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sNEJBQW9CLENBQUMsS0FBSyxDQUFDO0tBQ25DO0lBRUQsSUFBSSwrQkFBK0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMxQyxPQUFPLDRCQUFvQixDQUFDLGFBQWEsQ0FBQztLQUMzQztJQUVELElBQUksbUJBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDN0MsT0FBTyw0QkFBb0IsQ0FBQyxhQUFhLENBQUM7S0FDM0M7SUFFRCxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxtQkFBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUNsRCxPQUFPLDRCQUFvQixDQUFDLGFBQWEsQ0FBQztLQUMzQztJQUVELE9BQU8sK0JBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQyJ9