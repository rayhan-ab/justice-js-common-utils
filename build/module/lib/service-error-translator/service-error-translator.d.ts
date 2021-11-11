import * as React from "react";
interface ServiceErrorProps {
    errorCode: number;
}
export declare const ServiceErrorTranslator: (props: ServiceErrorProps) => {} | null | undefined;
export declare const Withi18nProvider: ({ children, lang }: {
    children: React.ReactNode;
    lang?: string | undefined;
}) => JSX.Element;
export declare const translateServiceError: (errorCode: number, lang?: string | undefined, defaultMessage?: React.ReactNode) => {};
export declare const translateServiceErrorForAdmin: (errorCode: number, lang?: string | undefined, defaultMessage?: React.ReactNode) => {};
export {};
