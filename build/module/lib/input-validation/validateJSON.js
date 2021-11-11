/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
export var ValidateJSONErrorType = Enum(CommonValidationErrorType.empty, CommonValidationErrorType.invalidFormat);
export var validateJSON = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.isObject, isObject = _d === void 0 ? true : _d;
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateJSONErrorType.empty;
    }
    try {
        var parsedJSON = JSON.parse(value);
        if (isObject && typeof parsedJSON !== "object") {
            return ValidateJSONErrorType.invalidFormat;
        }
        return null;
    }
    catch (e) {
        return ValidateJSONErrorType.invalidFormat;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVKU09OLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlSlNPTi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakUsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssRUFBRSx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQVFwSCxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBK0Q7UUFBL0QsNEJBQStELEVBQTdELGtCQUFpQixFQUFqQixzQ0FBaUIsRUFBRSxnQkFBZSxFQUFmLG9DQUFlO0lBQzlFLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7S0FDcEM7SUFFRCxJQUFJO1FBQ0YsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLFFBQVEsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDOUMsT0FBTyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7U0FDNUM7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztLQUM1QztBQUNILENBQUMsQ0FBQyJ9