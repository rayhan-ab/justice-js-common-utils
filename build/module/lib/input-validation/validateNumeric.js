/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, isNumeric } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType, ThrownErrorType } from "./constant/errorType";
export var ValidateNumericErrorType = Enum(CommonValidationErrorType.empty, CommonValidationErrorType.lessThanMinimumValue, CommonValidationErrorType.exceedMaximumValue, CommonValidationErrorType.invalidValue, CommonValidationErrorType.containsDecimal);
export var validateNumeric = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.min, min = _c === void 0 ? Number.MIN_SAFE_INTEGER : _c, _d = _b.max, max = _d === void 0 ? Number.MAX_SAFE_INTEGER : _d, _e = _b.isRequired, isRequired = _e === void 0 ? true : _e, _f = _b.excludedNumbers, excludedNumbers = _f === void 0 ? [] : _f, _g = _b.allowDecimal, allowDecimal = _g === void 0 ? true : _g;
    var isMaxOptionSmallerThanMinOption = max < min;
    var isDecimalNumber = Number(value) % 1 !== 0;
    if (isMaxOptionSmallerThanMinOption) {
        throw new Error(ThrownErrorType.invalidOption);
    }
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateNumericErrorType.empty;
    }
    if (!isNumeric(value) || Number(value) in excludedNumbers) {
        return ValidateNumericErrorType.invalidValue;
    }
    if (Number(value) < min) {
        return ValidateNumericErrorType.lessThanMinimumValue;
    }
    if (Number(value) > max) {
        return ValidateNumericErrorType.exceedMaximumValue;
    }
    if (!allowDecimal && isDecimalNumber) {
        return ValidateNumericErrorType.containsDecimal;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVOdW1lcmljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlTnVtZXJpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDL0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRixNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FBRyxJQUFJLENBQzFDLHlCQUF5QixDQUFDLEtBQUssRUFDL0IseUJBQXlCLENBQUMsb0JBQW9CLEVBQzlDLHlCQUF5QixDQUFDLGtCQUFrQixFQUM1Qyx5QkFBeUIsQ0FBQyxZQUFZLEVBQ3RDLHlCQUF5QixDQUFDLGVBQWUsQ0FDMUMsQ0FBQztBQVdGLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBRyxVQUM3QixLQUFhLEVBQ2IsRUFNNkI7UUFON0IsNEJBTTZCLEVBTDNCLFdBQTZCLEVBQTdCLGtEQUE2QixFQUM3QixXQUE2QixFQUE3QixrREFBNkIsRUFDN0Isa0JBQWlCLEVBQWpCLHNDQUFpQixFQUNqQix1QkFBb0IsRUFBcEIseUNBQW9CLEVBQ3BCLG9CQUFtQixFQUFuQix3Q0FBbUI7SUFHckIsSUFBTSwrQkFBK0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2xELElBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELElBQUksK0JBQStCLEVBQUU7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDaEQ7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sd0JBQXdCLENBQUMsS0FBSyxDQUFDO0tBQ3ZDO0lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksZUFBZSxFQUFFO1FBQ3pELE9BQU8sd0JBQXdCLENBQUMsWUFBWSxDQUFDO0tBQzlDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFO1FBQ3ZCLE9BQU8sd0JBQXdCLENBQUMsb0JBQW9CLENBQUM7S0FDdEQ7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUU7UUFDdkIsT0FBTyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQztLQUNwRDtJQUNELElBQUksQ0FBQyxZQUFZLElBQUksZUFBZSxFQUFFO1FBQ3BDLE9BQU8sd0JBQXdCLENBQUMsZUFBZSxDQUFDO0tBQ2pEO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMifQ==