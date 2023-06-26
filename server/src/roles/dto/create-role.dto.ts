export class CreateRoleDto {
    readonly value: string;
    readonly description: string;
}

export class AddRoleDto {
    readonly value: string;
    readonly userId: number;
}

export class RemoveRoleDto {
    readonly value: string;
    readonly userId: number;
}