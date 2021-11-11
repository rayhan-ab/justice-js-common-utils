/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
export var ValidateComplexPasswordErrorType = Enum(CommonValidationErrorType.empty, CommonValidationErrorType.invalidFormat);
/*DEPRECATED
 * please use validateComplexPasswordAsObject instead of this function
 * */
export var validateComplexPassword = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = 
    // tslint:disable-next-line
    '^(?:(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\\1{2,})[A-Za-z0-9!~<>,;:_=?*+#."&§%°()\\|\\[\\]\\-\\$\\^\\@\\/]{8,32}$';
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateComplexPasswordErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateComplexPasswordErrorType.invalidFormat;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVDb21wbGV4UGFzc3dvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVDb21wbGV4UGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRSxNQUFNLENBQUMsSUFBTSxnQ0FBZ0MsR0FBRyxJQUFJLENBQ2xELHlCQUF5QixDQUFDLEtBQUssRUFDL0IseUJBQXlCLENBQUMsYUFBYSxDQUN4QyxDQUFDO0FBT0Y7O0tBRUs7QUFDTCxNQUFNLENBQUMsSUFBTSx1QkFBdUIsR0FBRyxVQUFDLEtBQWEsRUFBRSxFQUEwRDtRQUF4RCx5Q0FBaUIsRUFBakIsc0NBQWlCO0lBQ3hFLElBQU0sS0FBSztJQUNULDJCQUEyQjtJQUMzQiw0T0FBNE8sQ0FBQztJQUMvTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sZ0NBQWdDLENBQUMsS0FBSyxDQUFDO0tBQy9DO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUM7S0FDdkQ7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyJ9