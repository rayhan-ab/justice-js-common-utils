/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { MAX_SHORT_TEXT_LENGTH } from "./constant/numbers";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateLegalDocumentNameErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
/**
 *
 * @param value
 * @param isRequired
 * @param maxLength
 *
 * @default isRequired true
 * @default maxLength MAX_SHORT_TEXT_LENGTH
 */
export var validateLegalDocumentName = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.maxLength, maxLength = _d === void 0 ? MAX_SHORT_TEXT_LENGTH : _d;
    var REGEX = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/;
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateLegalDocumentNameErrorType.empty;
    }
    if (!matches(value, REGEX)) {
        return ValidateLegalDocumentNameErrorType.invalidFormat;
    }
    return validateLength(value, {
        max: maxLength,
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVMZWdhbERvY3VtZW50TmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUxlZ2FsRG9jdW1lbnROYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLEVBQVEsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTNFLE1BQU0sQ0FBQyxJQUFNLGtDQUFrQyxHQUFHLFVBQVUsQ0FDMUQsdUJBQXVCLEVBQ3ZCLHlCQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQVFGOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQUcsVUFDdkMsS0FBYSxFQUNiLEVBQStGO1FBQS9GLDRCQUErRixFQUE3RixrQkFBaUIsRUFBakIsc0NBQWlCLEVBQUUsaUJBQWlDLEVBQWpDLHNEQUFpQztJQUV0RCxJQUFNLEtBQUssR0FBRyw2QkFBNkIsQ0FBQztJQUU1QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sa0NBQWtDLENBQUMsS0FBSyxDQUFDO0tBQ2pEO0lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxrQ0FBa0MsQ0FBQyxhQUFhLENBQUM7S0FDekQ7SUFFRCxPQUFPLGNBQWMsQ0FBQyxLQUFLLEVBQUU7UUFDM0IsR0FBRyxFQUFFLFNBQVM7S0FDZixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==