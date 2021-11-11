/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateChannelNameErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateChannelName = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var MAX_LENGTH = 64;
    var REGEX = "^([a-zA-Z0-9]+)((-|_)?[a-zA-Z0-9])*$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateChannelNameErrorType.empty;
    }
    if (!matches(value, REGEX) && value.length <= MAX_LENGTH) {
        return ValidateChannelNameErrorType.invalidFormat;
    }
    return validateLength(value, { max: MAX_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVDaGFubmVsTmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUNoYW5uZWxOYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLEVBQVEsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTNFLE1BQU0sQ0FBQyxJQUFNLDRCQUE0QixHQUFHLFVBQVUsQ0FDcEQsdUJBQXVCLEVBQ3ZCLHlCQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQU9GLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQXNEO1FBQXBELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDcEUsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLElBQU0sS0FBSyxHQUFHLHNDQUFzQyxDQUFDO0lBQ3JELElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyw0QkFBNEIsQ0FBQyxLQUFLLENBQUM7S0FDM0M7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLFVBQVUsRUFBRTtRQUN4RCxPQUFPLDRCQUE0QixDQUFDLGFBQWEsQ0FBQztLQUNuRDtJQUNELE9BQU8sY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyJ9