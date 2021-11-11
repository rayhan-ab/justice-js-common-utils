"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("validator");
var types_1 = require("../../types/types");
var errorType_1 = require("./constant/errorType");
var numbers_1 = require("./constant/numbers");
exports.ValidateLengthErrorType = types_1.Enum(errorType_1.CommonValidationErrorType.empty, errorType_1.CommonValidationErrorType.lessThanLengthLimit, errorType_1.CommonValidationErrorType.exceedLengthLimit);
exports.VALIDATE_LENGTH_DEFAULT_MAX_LENGTH = numbers_1.MAX_SHORT_TEXT_LENGTH;
exports.validateLength = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.min, min = _c === void 0 ? 1 : _c, _d = _b.max, max = _d === void 0 ? exports.VALIDATE_LENGTH_DEFAULT_MAX_LENGTH : _d, _e = _b.isRequired, isRequired = _e === void 0 ? true : _e;
    var isMinOptionMinus = min < 0;
    var isMaxOptionMinus = max < 0;
    var isMaxOptionSmallerThanMinOption = max < min;
    if (isMinOptionMinus || isMaxOptionMinus || isMaxOptionSmallerThanMinOption) {
        throw new Error(errorType_1.ThrownErrorType.invalidOption);
    }
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateLengthErrorType.empty;
    }
    if (value && value.length < min) {
        return exports.ValidateLengthErrorType.lessThanLengthLimit;
    }
    if (value && value.length > max) {
        return exports.ValidateLengthErrorType.exceedLengthLimit;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVMZW5ndGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVMZW5ndGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQW9DO0FBQ3BDLDJDQUF5QztBQUN6QyxrREFBa0Y7QUFDbEYsOENBQTJEO0FBRTlDLFFBQUEsdUJBQXVCLEdBQUcsWUFBSSxDQUN6QyxxQ0FBeUIsQ0FBQyxLQUFLLEVBQy9CLHFDQUF5QixDQUFDLG1CQUFtQixFQUM3QyxxQ0FBeUIsQ0FBQyxpQkFBaUIsQ0FDNUMsQ0FBQztBQVNXLFFBQUEsa0NBQWtDLEdBQUcsK0JBQXFCLENBQUM7QUFFM0QsUUFBQSxjQUFjLEdBQUcsVUFDNUIsS0FBYSxFQUNiLEVBQW1HO1FBQW5HLDRCQUFtRyxFQUFqRyxXQUFPLEVBQVAsNEJBQU8sRUFBRSxXQUF3QyxFQUF4QyxxRUFBd0MsRUFBRSxrQkFBaUIsRUFBakIsc0NBQWlCO0lBRXRFLElBQU0sZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQyxJQUFNLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakMsSUFBTSwrQkFBK0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2xELElBQUksZ0JBQWdCLElBQUksZ0JBQWdCLElBQUksK0JBQStCLEVBQUU7UUFDM0UsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTywrQkFBdUIsQ0FBQyxLQUFLLENBQUM7S0FDdEM7SUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUMvQixPQUFPLCtCQUF1QixDQUFDLG1CQUFtQixDQUFDO0tBQ3BEO0lBQ0QsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDL0IsT0FBTywrQkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQztLQUNsRDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDIn0=