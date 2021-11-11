"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Object.freeze(args.reduce(function (acc, next) {
        var _a;
        return __assign({}, acc, (_a = {}, _a[next] = next, _a));
    }, Object.create(null)));
};
exports.ExtendEnum = function (extendedEnum) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return __assign({}, extendedEnum, exports.Enum.apply(void 0, args));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHlwZXMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7QUFHVSxRQUFBLElBQUksR0FBRztJQUFxQixjQUFVO1NBQVYsVUFBVSxFQUFWLHFCQUFVLEVBQVYsSUFBVTtRQUFWLHlCQUFVOztJQUNqRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxJQUFJOztRQUN6QyxvQkFDSyxHQUFHLGVBQ0wsSUFBSSxJQUFHLElBQUksT0FDWjtJQUNKLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUE4QyxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQUcsVUFBeUIsWUFBZTtJQUFFLGNBQVc7U0FBWCxVQUFXLEVBQVgscUJBQVcsRUFBWCxJQUFXO1FBQVgsNkJBQVc7O0lBQzdFLG9CQUNLLFlBQVksRUFDWixZQUFJLGVBQUksSUFBSSxHQUNmO0FBQ0osQ0FBQyxDQUFDIn0=