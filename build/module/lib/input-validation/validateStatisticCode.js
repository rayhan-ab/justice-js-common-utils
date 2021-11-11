/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateStatisticCodeErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat, CommonValidationErrorType.alreadyUsed);
export var validateStatisticCode = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[a-z0-9]+([-]{0,1}[a-z0-9]+)*$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateStatisticCodeErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateStatisticCodeErrorType.invalidFormat;
    }
    return validateLength(value);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTdGF0aXN0aWNDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlU3RhdGlzdGljQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFRLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUzRSxNQUFNLENBQUMsSUFBTSw4QkFBOEIsR0FBRyxVQUFVLENBQ3RELHVCQUF1QixFQUN2Qix5QkFBeUIsQ0FBQyxhQUFhLEVBQ3ZDLHlCQUF5QixDQUFDLFdBQVcsQ0FDdEMsQ0FBQztBQU9GLE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQXdEO1FBQXRELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDdEUsSUFBTSxLQUFLLEdBQUcsaUNBQWlDLENBQUM7SUFDaEQsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLDhCQUE4QixDQUFDLEtBQUssQ0FBQztLQUM3QztJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sOEJBQThCLENBQUMsYUFBYSxDQUFDO0tBQ3JEO0lBQ0QsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDIn0=