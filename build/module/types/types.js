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
export var Enum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Object.freeze(args.reduce(function (acc, next) {
        var _a;
        return __assign({}, acc, (_a = {}, _a[next] = next, _a));
    }, Object.create(null)));
};
export var ExtendEnum = function (extendedEnum) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return __assign({}, extendedEnum, Enum.apply(void 0, args));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHlwZXMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRzs7Ozs7Ozs7Ozs7O0FBR0gsTUFBTSxDQUFDLElBQU0sSUFBSSxHQUFHO0lBQXFCLGNBQVU7U0FBVixVQUFVLEVBQVYscUJBQVUsRUFBVixJQUFVO1FBQVYseUJBQVU7O0lBQ2pELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7O1FBQ3pDLG9CQUNLLEdBQUcsZUFDTCxJQUFJLElBQUcsSUFBSSxPQUNaO0lBQ0osQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQThDLENBQUMsQ0FBQztBQUN4RSxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxVQUFVLEdBQUcsVUFBeUIsWUFBZTtJQUFFLGNBQVc7U0FBWCxVQUFXLEVBQVgscUJBQVcsRUFBWCxJQUFXO1FBQVgsNkJBQVc7O0lBQzdFLG9CQUNLLFlBQVksRUFDWixJQUFJLGVBQUksSUFBSSxHQUNmO0FBQ0osQ0FBQyxDQUFDIn0=