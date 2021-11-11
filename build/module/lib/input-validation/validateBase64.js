/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
export var ValidateBase64ErrorType = Enum(CommonValidationErrorType.empty, CommonValidationErrorType.invalidFormat);
export var validateBase64 = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[A-Za-z0-9+/]+={0,2}$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateBase64ErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateBase64ErrorType.invalidFormat;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVCYXNlNjQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVCYXNlNjQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRSxNQUFNLENBQUMsSUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxFQUFFLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBT3RILE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRyxVQUFDLEtBQWEsRUFBRSxFQUFpRDtRQUEvQyx5Q0FBaUIsRUFBakIsc0NBQWlCO0lBQy9ELElBQU0sS0FBSyxHQUFHLHdCQUF3QixDQUFDO0lBQ3ZDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyx1QkFBdUIsQ0FBQyxLQUFLLENBQUM7S0FDdEM7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMxQixPQUFPLHVCQUF1QixDQUFDLGFBQWEsQ0FBQztLQUM5QztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDIn0=