export declare class Validation<T> {
    private validationMap;
    private subscriber;
    set(key: keyof T, value: T[typeof key] | null): void;
    get(key: keyof T): T[typeof key] | null;
    clear(): void;
    listen(listener: () => unknown): void;
    unlisten(listener: () => unknown): void;
    clearSubscriber(): void;
    isAllValid(): boolean;
    private notifySubscribers;
}
