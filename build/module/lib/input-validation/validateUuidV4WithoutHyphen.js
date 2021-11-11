/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
export var ValidateUuidV4WithoutHyphenErrorType = Enum(CommonValidationErrorType.empty, CommonValidationErrorType.invalidFormat);
export var validateUuidV4WithoutHyphen = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15}$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateUuidV4WithoutHyphenErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateUuidV4WithoutHyphenErrorType.invalidFormat;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVVdWlkVjRXaXRob3V0SHlwaGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlVXVpZFY0V2l0aG91dEh5cGhlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpFLE1BQU0sQ0FBQyxJQUFNLG9DQUFvQyxHQUFHLElBQUksQ0FDdEQseUJBQXlCLENBQUMsS0FBSyxFQUMvQix5QkFBeUIsQ0FBQyxhQUFhLENBQ3hDLENBQUM7QUFPRixNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBRyxVQUN6QyxLQUFhLEVBQ2IsRUFBOEQ7UUFBNUQseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUVuQixJQUFNLEtBQUssR0FBRyw4Q0FBOEMsQ0FBQztJQUM3RCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sb0NBQW9DLENBQUMsS0FBSyxDQUFDO0tBQ25EO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxvQ0FBb0MsQ0FBQyxhQUFhLENBQUM7S0FDM0Q7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyJ9