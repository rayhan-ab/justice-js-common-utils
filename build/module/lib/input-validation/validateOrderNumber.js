/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
export var ValidateOrderNumberErrorType = Enum(CommonValidationErrorType.empty, CommonValidationErrorType.invalidFormat);
export var validateOrderNumber = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^O[0-9]{16,}$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateOrderNumberErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateOrderNumberErrorType.invalidFormat;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVPcmRlck51bWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZU9yZGVyTnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakUsTUFBTSxDQUFDLElBQU0sNEJBQTRCLEdBQUcsSUFBSSxDQUM5Qyx5QkFBeUIsQ0FBQyxLQUFLLEVBQy9CLHlCQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQU9GLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQXNEO1FBQXBELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDcEUsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDO0lBQzlCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyw0QkFBNEIsQ0FBQyxLQUFLLENBQUM7S0FDM0M7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMxQixPQUFPLDRCQUE0QixDQUFDLGFBQWEsQ0FBQztLQUNuRDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDIn0=