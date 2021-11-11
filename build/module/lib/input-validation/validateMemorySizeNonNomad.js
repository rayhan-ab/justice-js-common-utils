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
export var ValidateMemorySizeNonNomadErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
// tslint:disable-next-line:max-line-length
export var validateMemorySizeNonNomad = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var MAX_LENGTH = 9;
    var REGEX = "^[0-9]+Mi$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateMemorySizeNonNomadErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateMemorySizeNonNomadErrorType.invalidFormat;
    }
    return validateLength(value, { max: MAX_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVNZW1vcnlTaXplTm9uTm9tYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVNZW1vcnlTaXplTm9uTm9tYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBUSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsMkNBQTJDO0FBQzNDLE1BQU0sQ0FBQyxJQUFNLG1DQUFtQyxHQUFHLFVBQVUsQ0FDM0QsdUJBQXVCLEVBQ3ZCLHlCQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQU1GLDJDQUEyQztBQUMzQyxNQUFNLENBQUMsSUFBTSwwQkFBMEIsR0FBRyxVQUN4QyxLQUFhLEVBQ2IsRUFBNkQ7UUFBM0QseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUVuQixJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDckIsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQzNCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxtQ0FBbUMsQ0FBQyxLQUFLLENBQUM7S0FDbEQ7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMxQixPQUFPLG1DQUFtQyxDQUFDLGFBQWEsQ0FBQztLQUMxRDtJQUNELE9BQU8sY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyJ9