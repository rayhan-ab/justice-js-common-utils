/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
// tslint:disable-next-line:max-line-length
export var ValidateCpuSizeNonNomadErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateCpuSizeNonNomad = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var MAX_LENGTH = 8;
    var REGEX = "^[0-9]+m$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateCpuSizeNonNomadErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateCpuSizeNonNomadErrorType.invalidFormat;
    }
    return validateLength(value, { max: MAX_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVDcHVTaXplTm9uTm9tYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVDcHVTaXplTm9uTm9tYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBUSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsMkNBQTJDO0FBQzNDLE1BQU0sQ0FBQyxJQUFNLGdDQUFnQyxHQUFHLFVBQVUsQ0FDeEQsdUJBQXVCLEVBQ3ZCLHlCQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQU9GLE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQTBEO1FBQXhELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDeEUsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLElBQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQztJQUMxQixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sZ0NBQWdDLENBQUMsS0FBSyxDQUFDO0tBQy9DO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUM7S0FDdkQ7SUFDRCxPQUFPLGNBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMifQ==