import { Column, Model, Table, DataType, BelongsToMany } from 'sequelize-typescript';

interface IProductsColorAttr {
    name: string;
    hex: string;
}

@Table({tableName: 'products-color', createdAt: false, updatedAt: false})

export class ProductsColor extends Model<ProductsColor, IProductsColorAttr> {
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING})
    name: string;

    @Column({type: DataType.STRING})
    hex: string;
}