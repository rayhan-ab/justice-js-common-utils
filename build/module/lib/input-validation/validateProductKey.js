/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateProductKeyErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
var MAX_LENGTH = 120;
export var validateProductKey = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.max, max = _d === void 0 ? MAX_LENGTH : _d;
    var REGEX = "^([a-z0-9]+)(_?[a-z0-9])*$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateProductKeyErrorType.empty;
    }
    if (!matches(value, REGEX) && value.length <= max) {
        return ValidateProductKeyErrorType.invalidFormat;
    }
    return validateLength(value, { max: max });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVQcm9kdWN0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlUHJvZHVjdEtleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFRLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUzRSxNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBRyxVQUFVLENBQUMsdUJBQXVCLEVBQUUseUJBQXlCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFReEgsSUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLFVBQ2hDLEtBQWEsRUFDYixFQUF1RTtRQUF2RSw0QkFBdUUsRUFBckUsa0JBQWlCLEVBQWpCLHNDQUFpQixFQUFFLFdBQWdCLEVBQWhCLHFDQUFnQjtJQUVyQyxJQUFNLEtBQUssR0FBRyw0QkFBNEIsQ0FBQztJQUMzQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sMkJBQTJCLENBQUMsS0FBSyxDQUFDO0tBQzFDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7UUFDakQsT0FBTywyQkFBMkIsQ0FBQyxhQUFhLENBQUM7S0FDbEQ7SUFDRCxPQUFPLGNBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDIn0=