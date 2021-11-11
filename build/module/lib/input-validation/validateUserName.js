/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { MAX_DISPLAY_NAME_LENGTH } from "./constant/numbers";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateUserNameErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var MIN_USERNAME_LENGTH = 3;
/**
 *
 * @param value
 * @param isRequired
 * @param maxLength
 * @param minLength
 *
 * @default isRequired true
 * @default maxLength MAX_DISPLAY_NAME_LENGTH
 * @default minLength MIN_USERNAME_LENGTH
 */
export var validateUserName = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.maxLength, maxLength = _d === void 0 ? MAX_DISPLAY_NAME_LENGTH : _d, _e = _b.minLength, minLength = _e === void 0 ? MIN_USERNAME_LENGTH : _e;
    var REGEX = "^[^\\W_-][\\w-]+[^\\W_-]$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateUserNameErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateUserNameErrorType.invalidFormat;
    }
    return validateLength(value, {
        max: maxLength,
        min: minLength,
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVVc2VyTmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVVzZXJOYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLEVBQVEsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTNFLE1BQU0sQ0FBQyxJQUFNLHlCQUF5QixHQUFHLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUd0SCxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFRckM7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLFVBQzlCLEtBQWEsRUFDYixFQUkrQjtRQUovQiw0QkFJK0IsRUFIN0Isa0JBQWlCLEVBQWpCLHNDQUFpQixFQUNqQixpQkFBbUMsRUFBbkMsd0RBQW1DLEVBQ25DLGlCQUErQixFQUEvQixvREFBK0I7SUFHakMsSUFBTSxLQUFLLEdBQUcsMkJBQTJCLENBQUM7SUFDMUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLHlCQUF5QixDQUFDLEtBQUssQ0FBQztLQUN4QztJQUVELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8seUJBQXlCLENBQUMsYUFBYSxDQUFDO0tBQ2hEO0lBRUQsT0FBTyxjQUFjLENBQUMsS0FBSyxFQUFFO1FBQzNCLEdBQUcsRUFBRSxTQUFTO1FBQ2QsR0FBRyxFQUFFLFNBQVM7S0FDZixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==