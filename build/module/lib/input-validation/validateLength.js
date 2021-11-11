/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType, ThrownErrorType } from "./constant/errorType";
import { MAX_SHORT_TEXT_LENGTH } from "./constant/numbers";
export var ValidateLengthErrorType = Enum(CommonValidationErrorType.empty, CommonValidationErrorType.lessThanLengthLimit, CommonValidationErrorType.exceedLengthLimit);
export var VALIDATE_LENGTH_DEFAULT_MAX_LENGTH = MAX_SHORT_TEXT_LENGTH;
export var validateLength = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.min, min = _c === void 0 ? 1 : _c, _d = _b.max, max = _d === void 0 ? VALIDATE_LENGTH_DEFAULT_MAX_LENGTH : _d, _e = _b.isRequired, isRequired = _e === void 0 ? true : _e;
    var isMinOptionMinus = min < 0;
    var isMaxOptionMinus = max < 0;
    var isMaxOptionSmallerThanMinOption = max < min;
    if (isMinOptionMinus || isMaxOptionMinus || isMaxOptionSmallerThanMinOption) {
        throw new Error(ThrownErrorType.invalidOption);
    }
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateLengthErrorType.empty;
    }
    if (value && value.length < min) {
        return ValidateLengthErrorType.lessThanLengthLimit;
    }
    if (value && value.length > max) {
        return ValidateLengthErrorType.exceedLengthLimit;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVMZW5ndGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVMZW5ndGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRCxNQUFNLENBQUMsSUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQ3pDLHlCQUF5QixDQUFDLEtBQUssRUFDL0IseUJBQXlCLENBQUMsbUJBQW1CLEVBQzdDLHlCQUF5QixDQUFDLGlCQUFpQixDQUM1QyxDQUFDO0FBU0YsTUFBTSxDQUFDLElBQU0sa0NBQWtDLEdBQUcscUJBQXFCLENBQUM7QUFFeEUsTUFBTSxDQUFDLElBQU0sY0FBYyxHQUFHLFVBQzVCLEtBQWEsRUFDYixFQUFtRztRQUFuRyw0QkFBbUcsRUFBakcsV0FBTyxFQUFQLDRCQUFPLEVBQUUsV0FBd0MsRUFBeEMsNkRBQXdDLEVBQUUsa0JBQWlCLEVBQWpCLHNDQUFpQjtJQUV0RSxJQUFNLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakMsSUFBTSxnQkFBZ0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLElBQU0sK0JBQStCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNsRCxJQUFJLGdCQUFnQixJQUFJLGdCQUFnQixJQUFJLCtCQUErQixFQUFFO1FBQzNFLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLHVCQUF1QixDQUFDLEtBQUssQ0FBQztLQUN0QztJQUNELElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQy9CLE9BQU8sdUJBQXVCLENBQUMsbUJBQW1CLENBQUM7S0FDcEQ7SUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUMvQixPQUFPLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDO0tBQ2xEO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMifQ==