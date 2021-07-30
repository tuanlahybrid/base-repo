
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    id: string;
    email: string;
    password?: Nullable<string>;
    name?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    isVerified?: Nullable<boolean>;
}

export class UserResponse {
    statusCode?: Nullable<number>;
    error?: Nullable<Error>;
    data?: Nullable<User>;
}

export abstract class IQuery {
    abstract user(email: string): Nullable<UserResponse> | Promise<Nullable<UserResponse>>;
}

export class Error {
    errorCode: string;
    message?: Nullable<string>;
    details?: Nullable<Nullable<ErrorDetail>[]>;
}

export class ErrorDetail {
    message?: Nullable<string>;
    type?: Nullable<string>;
    key?: Nullable<string>;
    value?: Nullable<string>;
}

type Nullable<T> = T | null;
