import { Column, Model, Table, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import { User } from 'src/auth/auth.model';
import { RolesUser } from './roles-user.model';

interface IRolesAttr {
    value: string;
    description: string;
}

@Table({tableName: 'roles', createdAt: false, updatedAt: false})

export class Roles extends Model<Roles, IRolesAttr> {
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, unique: true})
    value: string;

    @Column({type: DataType.STRING})
    description: string;

    @BelongsToMany(() => User, () => RolesUser)
    users: User[]
}