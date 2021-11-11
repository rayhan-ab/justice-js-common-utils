/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateMemorySizeErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateMemorySize = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var MAX_LENGTH = 9;
    var REGEX = "^[0-9]+$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateMemorySizeErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateMemorySizeErrorType.invalidFormat;
    }
    return validateLength(value, { max: MAX_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVNZW1vcnlTaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlTWVtb3J5U2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFRLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUzRSxNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBRyxVQUFVLENBQUMsdUJBQXVCLEVBQUUseUJBQXlCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFPeEgsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBcUQ7UUFBbkQseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUNuRSxJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDckIsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDO0lBQ3pCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTywyQkFBMkIsQ0FBQyxLQUFLLENBQUM7S0FDMUM7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMxQixPQUFPLDJCQUEyQixDQUFDLGFBQWEsQ0FBQztLQUNsRDtJQUNELE9BQU8sY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyJ9