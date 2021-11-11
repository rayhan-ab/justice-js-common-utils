/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateSkuErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
var MAXIMUM_SKU_LENGTH = 32;
export var validateSku = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.maxLength, maxLength = _d === void 0 ? MAXIMUM_SKU_LENGTH : _d;
    var REGEX = "^[a-zA-Z0-9]+([_:-]{1}[a-zA-Z0-9]+)*$|^$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateSkuErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateSkuErrorType.invalidFormat;
    }
    return validateLength(value, { max: maxLength });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTa3UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVTa3UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBUSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsVUFBVSxDQUFDLHVCQUF1QixFQUFFLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBR2pILElBQU0sa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0FBTzlCLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRyxVQUN6QixLQUFhLEVBQ2IsRUFBOEU7UUFBOUUsNEJBQThFLEVBQTVFLGtCQUFpQixFQUFqQixzQ0FBaUIsRUFBRSxpQkFBOEIsRUFBOUIsbURBQThCO0lBRW5ELElBQU0sS0FBSyxHQUFHLDBDQUEwQyxDQUFDO0lBQ3pELElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7S0FDbkM7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMxQixPQUFPLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztLQUMzQztJQUNELE9BQU8sY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyJ9