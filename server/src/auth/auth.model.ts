import { Column, Model, Table, DataType, BelongsToMany } from 'sequelize-typescript';
import { RolesUser } from 'src/roles/roles-user.model';
import { Roles } from 'src/roles/roles.model';

interface IUsersAttr {
    name: string;
    email: string;
    password: string;
    telephone: string;
}

@Table({tableName: 'users', createdAt: false, updatedAt: false})

export class User extends Model<User, IUsersAttr> {
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, unique: true})
    name: string;

    @Column({type: DataType.STRING, unique: true})
    email: string;

    @Column({type: DataType.STRING})
    password: string;

    @Column({type: DataType.STRING, unique: true})
    telephone: string;

    @BelongsToMany(() => Roles, () => RolesUser)
    roles: Roles[]
}