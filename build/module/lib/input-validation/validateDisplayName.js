/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import XRegExp from "xregexp";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { MAX_DISPLAY_NAME_LENGTH } from "./constant/numbers";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateDisplayNameErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
/**
 *
 * @param value
 * @param allowUnicode (true: Allow various language character, false: only allow Alpha Numeric character)
 * @param isRequired
 * @param strictlyAllowSpecialCharacters (true: allow (',. -) in the mid of value, false: Only allow Alpha Numeric)
 * @param maxLength
 *
 * @default allowUnicode false
 * @default isRequired true
 * @default strictlyAllowSpecialCharacters true
 * @default maxLength MAX_DISPLAY_NAME_LENGTH
 */
export var validateDisplayName = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.allowUnicode, allowUnicode = _c === void 0 ? false : _c, _d = _b.isRequired, isRequired = _d === void 0 ? true : _d, _e = _b.strictlyAllowSpecialCharacters, strictlyAllowSpecialCharacters = _e === void 0 ? true : _e, _f = _b.maxLength, maxLength = _f === void 0 ? MAX_DISPLAY_NAME_LENGTH : _f;
    var REGEX = "^[a-zA-Z0-9]+(([',. -][a-zA-Z0-9])?[a-zA-Z0-9]*)*$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateDisplayNameErrorType.empty;
    }
    if (allowUnicode && !strictlyAllowSpecialCharacters && !XRegExp("^[\\pL\\pN\\pM]*$").test(value)) {
        return ValidateDisplayNameErrorType.invalidFormat;
    }
    if (allowUnicode &&
        strictlyAllowSpecialCharacters &&
        !XRegExp("^[\\pL\\pN\\pM]+([',. -][\\pL\\pN]+)*$").test(value)) {
        return ValidateDisplayNameErrorType.invalidFormat;
    }
    if (!allowUnicode && !strictlyAllowSpecialCharacters && !matches(value, /^\w*$/g)) {
        return ValidateDisplayNameErrorType.invalidFormat;
    }
    if (!allowUnicode && strictlyAllowSpecialCharacters && value.trim() !== value) {
        return ValidateDisplayNameErrorType.invalidFormat;
    }
    if (!allowUnicode && strictlyAllowSpecialCharacters && !matches(value, REGEX)) {
        return ValidateDisplayNameErrorType.invalidFormat;
    }
    return validateLength(value, {
        max: maxLength,
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVEaXNwbGF5TmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZURpc3BsYXlOYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxFQUFRLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUzRSxNQUFNLENBQUMsSUFBTSw0QkFBNEIsR0FBRyxVQUFVLENBQ3BELHVCQUF1QixFQUN2Qix5QkFBeUIsQ0FBQyxhQUFhLENBQ3hDLENBQUM7QUFVRjs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxVQUNqQyxLQUFhLEVBQ2IsRUFLa0M7UUFMbEMsNEJBS2tDLEVBSmhDLG9CQUFvQixFQUFwQix5Q0FBb0IsRUFDcEIsa0JBQWlCLEVBQWpCLHNDQUFpQixFQUNqQixzQ0FBcUMsRUFBckMsMERBQXFDLEVBQ3JDLGlCQUFtQyxFQUFuQyx3REFBbUM7SUFHckMsSUFBTSxLQUFLLEdBQUcsb0RBQW9ELENBQUM7SUFFbkUsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLDRCQUE0QixDQUFDLEtBQUssQ0FBQztLQUMzQztJQUVELElBQUksWUFBWSxJQUFJLENBQUMsOEJBQThCLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDaEcsT0FBTyw0QkFBNEIsQ0FBQyxhQUFhLENBQUM7S0FDbkQ7SUFFRCxJQUNFLFlBQVk7UUFDWiw4QkFBOEI7UUFDOUIsQ0FBQyxPQUFPLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQzlEO1FBQ0EsT0FBTyw0QkFBNEIsQ0FBQyxhQUFhLENBQUM7S0FDbkQ7SUFFRCxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsOEJBQThCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFO1FBQ2pGLE9BQU8sNEJBQTRCLENBQUMsYUFBYSxDQUFDO0tBQ25EO0lBRUQsSUFBSSxDQUFDLFlBQVksSUFBSSw4QkFBOEIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssS0FBSyxFQUFFO1FBQzdFLE9BQU8sNEJBQTRCLENBQUMsYUFBYSxDQUFDO0tBQ25EO0lBRUQsSUFBSSxDQUFDLFlBQVksSUFBSSw4QkFBOEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDN0UsT0FBTyw0QkFBNEIsQ0FBQyxhQUFhLENBQUM7S0FDbkQ7SUFFRCxPQUFPLGNBQWMsQ0FBQyxLQUFLLEVBQUU7UUFDM0IsR0FBRyxFQUFFLFNBQVM7S0FDZixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==