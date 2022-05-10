export interface IUserLogin {
    email: string;
    password: string;
    token?: string;
    name?: string;
    isAdmin?: boolean;
}