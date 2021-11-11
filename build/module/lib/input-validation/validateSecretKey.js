/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateSecretKeyErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateSecretKey = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.maxLength, maxLength = _d === void 0 ? 256 : _d;
    var REGEX = "^[^*\\s]+$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateSecretKeyErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateSecretKeyErrorType.invalidFormat;
    }
    return validateLength(value, { max: maxLength });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTZWNyZXRLZXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVTZWNyZXRLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBUSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQUcsVUFBVSxDQUFDLHVCQUF1QixFQUFFLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBUXZILE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLFVBQy9CLEtBQWEsRUFDYixFQUFxRTtRQUFyRSw0QkFBcUUsRUFBbkUsa0JBQWlCLEVBQWpCLHNDQUFpQixFQUFFLGlCQUFlLEVBQWYsb0NBQWU7SUFFcEMsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQzNCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTywwQkFBMEIsQ0FBQyxLQUFLLENBQUM7S0FDekM7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMxQixPQUFPLDBCQUEwQixDQUFDLGFBQWEsQ0FBQztLQUNqRDtJQUNELE9BQU8sY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyJ9