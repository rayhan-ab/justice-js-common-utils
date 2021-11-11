/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateDockerImageErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateDockerImage = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[a-z0-9]+([.\\/_-]{1}[a-z0-9]+)*([:]{1}([0-9a-z]+([.-]{1}[0-9a-z]+)*)+)?$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateDockerImageErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateDockerImageErrorType.invalidFormat;
    }
    return validateLength(value);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVEb2NrZXJJbWFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZURvY2tlckltYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLEVBQVEsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTNFLE1BQU0sQ0FBQyxJQUFNLDRCQUE0QixHQUFHLFVBQVUsQ0FDcEQsdUJBQXVCLEVBQ3ZCLHlCQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQU9GLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQXNEO1FBQXBELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDcEUsSUFBTSxLQUFLLEdBQUcsNEVBQTRFLENBQUM7SUFDM0YsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLDRCQUE0QixDQUFDLEtBQUssQ0FBQztLQUMzQztJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sNEJBQTRCLENBQUMsYUFBYSxDQUFDO0tBQ25EO0lBQ0QsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDIn0=