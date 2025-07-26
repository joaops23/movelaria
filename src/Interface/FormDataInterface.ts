export interface FormDataLogin {
    email: string;
    password: string;
}

export interface AuthInterface {
    access_token?: string;
    expires?: number;
    userId?: string;
}