import { Column, Model, Table, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/auth/auth.model';
import { Roles } from './roles.model';

@Table({tableName: 'roles-user', createdAt: false, updatedAt: false})

export class RolesUser extends Model {
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ForeignKey(() => Roles)
    @Column({type: DataType.INTEGER})
    roleId: number;
}