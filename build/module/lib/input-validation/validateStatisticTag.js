/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateStatisticTagErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateStatisticTag = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var MAX_LENGTH = 36;
    var REGEX = "^[a-zA-Z0-9]+([_]{1}[a-zA-Z0-9]+)*$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateStatisticTagErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateStatisticTagErrorType.invalidFormat;
    }
    return validateLength(value, { max: MAX_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTdGF0aXN0aWNUYWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVTdGF0aXN0aWNUYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBUSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQUcsVUFBVSxDQUNyRCx1QkFBdUIsRUFDdkIseUJBQXlCLENBQUMsYUFBYSxDQUN4QyxDQUFDO0FBT0YsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBdUQ7UUFBckQseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUNyRSxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdEIsSUFBTSxLQUFLLEdBQUcscUNBQXFDLENBQUM7SUFDcEQsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLDZCQUE2QixDQUFDLEtBQUssQ0FBQztLQUM1QztJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sNkJBQTZCLENBQUMsYUFBYSxDQUFDO0tBQ3BEO0lBQ0QsT0FBTyxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDIn0=