/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateTemplateSlugErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateTemplateSlug = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[a-zA-Z]+([-]{1}[a-zA-Z]+)*$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateTemplateSlugErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateTemplateSlugErrorType.invalidFormat;
    }
    return validateLength(value);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVUZW1wbGF0ZVNsdWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVUZW1wbGF0ZVNsdWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBUSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQUcsVUFBVSxDQUNyRCx1QkFBdUIsRUFDdkIseUJBQXlCLENBQUMsYUFBYSxDQUN4QyxDQUFDO0FBT0YsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBdUQ7UUFBckQseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUNyRSxJQUFNLEtBQUssR0FBRywrQkFBK0IsQ0FBQztJQUM5QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sNkJBQTZCLENBQUMsS0FBSyxDQUFDO0tBQzVDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyw2QkFBNkIsQ0FBQyxhQUFhLENBQUM7S0FDcEQ7SUFDRCxPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMifQ==