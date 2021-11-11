/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateCpuSizeErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateCpuSize = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var MAX_LENGTH = 8;
    var REGEX = "^[0-9]+$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateCpuSizeErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateCpuSizeErrorType.invalidFormat;
    }
    return validateLength(value, { max: MAX_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVDcHVTaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlQ3B1U2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFRLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUzRSxNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FBRyxVQUFVLENBQUMsdUJBQXVCLEVBQUUseUJBQXlCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFPckgsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQWtEO1FBQWhELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDaEUsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLElBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQztJQUN6QixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sd0JBQXdCLENBQUMsS0FBSyxDQUFDO0tBQ3ZDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyx3QkFBd0IsQ0FBQyxhQUFhLENBQUM7S0FDL0M7SUFDRCxPQUFPLGNBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMifQ==