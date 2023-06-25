export interface IUserRegisterRes {
    readonly name: string;
    readonly email: string;
    readonly password: string;
}

export interface IUserLoginRes {
    readonly email: string;
    readonly password: string;
}

export interface IUserReq {
    user: IUserReq[],
    access_token: string
}

export interface IUserReq {
    email: string,
    id: number,
    name: string,
    password: string
    roles: IRole[]
}

export interface IRole {
    description: string,
    id: number,
    value: string,
    RolesUser: IRolesUser[]
}

export interface IRolesUser {
    id: number,
    roleId: number,
    userId: number
}

export interface IDecodeToken {
    id: number,
    name: string,
    iat: string,
    exp: string
}

export interface IErrorReq {
    data: {
        statusCode: number,
        message: string,
    },
    status: number
}

export interface IAdminItems {
    id: number,
    name: string,
    image_black: string | null,
    image_white: string | null,
    dop: boolean
}

export interface IAdminPages {
    id: number;
    page: () => JSX.Element; 
}