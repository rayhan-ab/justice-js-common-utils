/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty, matches } from "validator";
import { ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { MAX_SHORT_TEXT_LENGTH } from "./constant/numbers";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
export var ValidateDockerVersionErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export var validateDockerImageVersion = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.maxLength, maxLength = _c === void 0 ? MAX_SHORT_TEXT_LENGTH : _c, _d = _b.isRequired, isRequired = _d === void 0 ? true : _d;
    var REGEX = "[^A-Za-z0-9-_.]";
    if (isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return ValidateDockerVersionErrorType.empty;
    }
    if (matches(value, REGEX)) {
        return ValidateDockerVersionErrorType.invalidFormat;
    }
    return validateLength(value, { max: maxLength });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVEb2NrZXJJbWFnZVZlcnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVEb2NrZXJJbWFnZVZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBUSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsTUFBTSxDQUFDLElBQU0sOEJBQThCLEdBQUcsVUFBVSxDQUN0RCx1QkFBdUIsRUFDdkIseUJBQXlCLENBQUMsYUFBYSxDQUN4QyxDQUFDO0FBU0YsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQUcsVUFDeEMsS0FBYSxFQUNiLEVBQXVGO1FBQXZGLDRCQUF1RixFQUFyRixpQkFBaUMsRUFBakMsc0RBQWlDLEVBQUUsa0JBQWlCLEVBQWpCLHNDQUFpQjtJQUV0RCxJQUFNLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztJQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sOEJBQThCLENBQUMsS0FBSyxDQUFDO0tBQzdDO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sOEJBQThCLENBQUMsYUFBYSxDQUFDO0tBQ3JEO0lBRUQsT0FBTyxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDIn0=