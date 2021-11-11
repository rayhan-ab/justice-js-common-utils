/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isAlpha, isEmpty, isLowercase, isUppercase } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType, ThrownErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateAlphaErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateAlpha = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.maxLength, maxLength = _c === void 0 ? 256 : _c, _d = _b.isRequired, isRequired = _d === void 0 ? true : _d, _e = _b.isUppercaseOnly, isUppercaseOnly = _e === void 0 ? false : _e, _f = _b.isLowercaseOnly, isLowercaseOnly = _f === void 0 ? false : _f;
    if (isLowercaseOnly && isUppercaseOnly) {
        throw new Error(ThrownErrorType.invalidOption);
    }
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateAlphaErrorType.empty;
    }
    if (isUppercaseOnly && !isUppercase(value)) {
        return ValidateAlphaErrorType.invalidFormat;
    }
    if (isLowercaseOnly && !isLowercase(value)) {
        return ValidateAlphaErrorType.invalidFormat;
    }
    if (!isAlpha(value)) {
        return ValidateAlphaErrorType.invalidFormat;
    }
    return validateLength(value, { max: maxLength });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVBbHBoYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUFscGhhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZFLE9BQU8sRUFBUSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTNFLE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQVVuSCxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsVUFDM0IsS0FBYSxFQUNiLEVBQW1IO1FBQW5ILDRCQUFtSCxFQUFqSCxpQkFBZSxFQUFmLG9DQUFlLEVBQUUsa0JBQWlCLEVBQWpCLHNDQUFpQixFQUFFLHVCQUF1QixFQUF2Qiw0Q0FBdUIsRUFBRSx1QkFBdUIsRUFBdkIsNENBQXVCO0lBRXRGLElBQUksZUFBZSxJQUFJLGVBQWUsRUFBRTtRQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUNoRDtJQUNELElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7S0FDckM7SUFDRCxJQUFJLGVBQWUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMxQyxPQUFPLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztLQUM3QztJQUNELElBQUksZUFBZSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzFDLE9BQU8sc0JBQXNCLENBQUMsYUFBYSxDQUFDO0tBQzdDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNuQixPQUFPLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztLQUM3QztJQUNELE9BQU8sY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyJ9