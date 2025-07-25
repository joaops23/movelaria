export interface PayloadLoginInterface {
    email: string;
    password: string;
}

export interface ResponseLoginInterface {
    data: {
        success: Boolean,
        message?: String,
        error?: String
    }
}