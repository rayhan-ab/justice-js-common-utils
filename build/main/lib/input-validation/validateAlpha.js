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
exports.ValidateAlphaErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateAlpha = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.maxLength, maxLength = _c === void 0 ? 256 : _c, _d = _b.isRequired, isRequired = _d === void 0 ? true : _d, _e = _b.isUppercaseOnly, isUppercaseOnly = _e === void 0 ? false : _e, _f = _b.isLowercaseOnly, isLowercaseOnly = _f === void 0 ? false : _f;
    if (isLowercaseOnly && isUppercaseOnly) {
        throw new Error(errorType_1.ThrownErrorType.invalidOption);
    }
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateAlphaErrorType.empty;
    }
    if (isUppercaseOnly && !validator_1.isUppercase(value)) {
        return exports.ValidateAlphaErrorType.invalidFormat;
    }
    if (isLowercaseOnly && !validator_1.isLowercase(value)) {
        return exports.ValidateAlphaErrorType.invalidFormat;
    }
    if (!validator_1.isAlpha(value)) {
        return exports.ValidateAlphaErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: maxLength });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVBbHBoYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUFscGhhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHVDQUF1RTtBQUN2RSwyQ0FBcUQ7QUFDckQsa0RBQWtGO0FBQ2xGLG1EQUEyRTtBQUU5RCxRQUFBLHNCQUFzQixHQUFHLGtCQUFVLENBQUMsd0NBQXVCLEVBQUUscUNBQXlCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFVdEcsUUFBQSxhQUFhLEdBQUcsVUFDM0IsS0FBYSxFQUNiLEVBQW1IO1FBQW5ILDRCQUFtSCxFQUFqSCxpQkFBZSxFQUFmLG9DQUFlLEVBQUUsa0JBQWlCLEVBQWpCLHNDQUFpQixFQUFFLHVCQUF1QixFQUF2Qiw0Q0FBdUIsRUFBRSx1QkFBdUIsRUFBdkIsNENBQXVCO0lBRXRGLElBQUksZUFBZSxJQUFJLGVBQWUsRUFBRTtRQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDaEQ7SUFDRCxJQUFJLG1CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLDhCQUFzQixDQUFDLEtBQUssQ0FBQztLQUNyQztJQUNELElBQUksZUFBZSxJQUFJLENBQUMsdUJBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMxQyxPQUFPLDhCQUFzQixDQUFDLGFBQWEsQ0FBQztLQUM3QztJQUNELElBQUksZUFBZSxJQUFJLENBQUMsdUJBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMxQyxPQUFPLDhCQUFzQixDQUFDLGFBQWEsQ0FBQztLQUM3QztJQUNELElBQUksQ0FBQyxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE9BQU8sOEJBQXNCLENBQUMsYUFBYSxDQUFDO0tBQzdDO0lBQ0QsT0FBTywrQkFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyJ9