/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateTagErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateTag = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var MAXIMUM_TAG_LENGTH = 30;
    var REGEX = "^[a-zA-Z]+([_:-]{1}[a-zA-Z]+)*$";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateTagErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateTagErrorType.invalidFormat;
    }
    return validateLength(value, { max: MAXIMUM_TAG_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVUYWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVUYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBUSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsVUFBVSxDQUFDLHVCQUF1QixFQUFFLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBT2pILE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQWEsRUFBRSxFQUE4QztRQUE1Qyx5Q0FBaUIsRUFBakIsc0NBQWlCO0lBQzVELElBQU0sa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLElBQU0sS0FBSyxHQUFHLGlDQUFpQyxDQUFDO0lBQ2hELElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7S0FDbkM7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMxQixPQUFPLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztLQUMzQztJQUNELE9BQU8sY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7QUFDNUQsQ0FBQyxDQUFDIn0=