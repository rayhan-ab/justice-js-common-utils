/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { MAX_DISPLAY_NAME_LENGTH } from "./constant/numbers";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidatePersonNameErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validatePersonName = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidatePersonNameErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidatePersonNameErrorType.invalidFormat;
    }
    var validateLengthOptions = { min: 2, max: MAX_DISPLAY_NAME_LENGTH };
    return validateLength(value, validateLengthOptions);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVQZXJzb25OYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlUGVyc29uTmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFRLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQXdCLE1BQU0sa0JBQWtCLENBQUM7QUFFakcsTUFBTSxDQUFDLElBQU0sMkJBQTJCLEdBQUcsVUFBVSxDQUFDLHVCQUF1QixFQUFFLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBT3hILE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQXFEO1FBQW5ELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDbkUsSUFBTSxLQUFLLEdBQUcsMkNBQTJDLENBQUM7SUFDMUQsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLDJCQUEyQixDQUFDLEtBQUssQ0FBQztLQUMxQztJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sMkJBQTJCLENBQUMsYUFBYSxDQUFDO0tBQ2xEO0lBQ0QsSUFBTSxxQkFBcUIsR0FBeUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSx1QkFBdUIsRUFBRSxDQUFDO0lBQzdGLE9BQU8sY0FBYyxDQUFDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyJ9