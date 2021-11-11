/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateSeasonPassCodeErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat, CommonValidationErrorType.alreadyUsed);
export var validateSeasonPassCode = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[a-z0-9]+([_:-]{1}[a-z0-9]+)*$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateSeasonPassCodeErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateSeasonPassCodeErrorType.invalidFormat;
    }
    return validateLength(value);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTZWFzb25QYXNzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVNlYXNvblBhc3NDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLEVBQVEsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTNFLE1BQU0sQ0FBQyxJQUFNLCtCQUErQixHQUFHLFVBQVUsQ0FDdkQsdUJBQXVCLEVBQ3ZCLHlCQUF5QixDQUFDLGFBQWEsRUFDdkMseUJBQXlCLENBQUMsV0FBVyxDQUN0QyxDQUFDO0FBT0YsTUFBTSxDQUFDLElBQU0sc0JBQXNCLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBeUQ7UUFBdkQseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUN2RSxJQUFNLEtBQUssR0FBRyxpQ0FBaUMsQ0FBQztJQUNoRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sK0JBQStCLENBQUMsS0FBSyxDQUFDO0tBQzlDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTywrQkFBK0IsQ0FBQyxhQUFhLENBQUM7S0FDdEQ7SUFDRCxPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMifQ==