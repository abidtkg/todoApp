export interface ILoggedin {
    token: string;
    name: string;
    isAdmin: boolean;
}

export interface IRegister {
    name: string;
    email: string;
    password: string
}

export interface IRegisterResponse {
    token: string;
}