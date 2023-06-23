export class RegisterAuthDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
}

export class LoginAuthDto {
    readonly email: string;
    readonly password: string;
}