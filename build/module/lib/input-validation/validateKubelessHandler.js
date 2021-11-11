/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateKubelessHandlerErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateKubelessHandler = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "[a-zA-Z0-9_]$";
    var MAX_HANDLER_LENGTH = 256;
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateKubelessHandlerErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateKubelessHandlerErrorType.invalidFormat;
    }
    return validateLength(value, { max: MAX_HANDLER_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVLdWJlbGVzc0hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVLdWJlbGVzc0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBUSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsTUFBTSxDQUFDLElBQU0sZ0NBQWdDLEdBQUcsVUFBVSxDQUN4RCx1QkFBdUIsRUFDdkIseUJBQXlCLENBQUMsYUFBYSxDQUN4QyxDQUFDO0FBT0YsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBMEQ7UUFBeEQseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUN4RSxJQUFNLEtBQUssR0FBRyxlQUFlLENBQUM7SUFDOUIsSUFBTSxrQkFBa0IsR0FBRyxHQUFHLENBQUM7SUFDL0IsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLGdDQUFnQyxDQUFDLEtBQUssQ0FBQztLQUMvQztJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sZ0NBQWdDLENBQUMsYUFBYSxDQUFDO0tBQ3ZEO0lBQ0QsT0FBTyxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztBQUM1RCxDQUFDLENBQUMifQ==