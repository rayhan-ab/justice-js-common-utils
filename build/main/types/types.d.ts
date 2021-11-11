export declare type UnionFromTuple<T> = T extends Array<infer U> ? U : never;
export declare const Enum: <T extends string[]>(...args: T) => Readonly<{ [P in UnionFromTuple<T>]: P; }>;
export declare type Enum<T extends object> = T[keyof T];
export declare const ExtendEnum: <T, T2 extends string[]>(extendedEnum: T, ...args: T2) => T & Readonly<{ [P in UnionFromTuple<T2>]: P; }>;
