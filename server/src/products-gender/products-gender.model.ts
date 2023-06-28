import { Column, Model, Table, DataType } from 'sequelize-typescript';

interface IProductsGenderAttr {
    name: string;
}

@Table({tableName: 'products-gender', createdAt: false, updatedAt: false})

export class ProductsGender extends Model<ProductsGender, IProductsGenderAttr> {
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING})
    name: string;
}