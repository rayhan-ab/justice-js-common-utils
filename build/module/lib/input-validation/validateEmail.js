/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { MAX_EMAIL_LENGTH } from "./constant/numbers";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateEmailErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateEmail = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateEmailErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateEmailErrorType.invalidFormat;
    }
    return validateLength(value, { max: MAX_EMAIL_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVFbWFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLEVBQVEsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTNFLE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQU9uSCxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBZ0Q7UUFBOUMseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUM5RCxJQUFNLEtBQUssR0FBRyxpRkFBaUYsQ0FBQztJQUNoRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sc0JBQXNCLENBQUMsS0FBSyxDQUFDO0tBQ3JDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7S0FDN0M7SUFDRCxPQUFPLGNBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQyJ9