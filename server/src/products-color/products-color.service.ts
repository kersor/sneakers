import { Injectable } from '@nestjs/common';
import { CreateProductsColorDto } from './dto/create-products-color.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductsColor } from './products-color.model';

@Injectable()
export class ProductsColorService {
    constructor(@InjectModel(ProductsColor) private productsColorModel: typeof ProductsColor) {}

    async createColorProduct (dto: CreateProductsColorDto) {
        const color = await this.productsColorModel.create(dto)
        return color
    }

    async getOneColorProduct (id: number) {
        const color = await this.productsColorModel.findOne({where: {id}})
        return color
    }

    async getAllColorProduct () {
        const colors = await this.productsColorModel.findAll()
        return colors
    }

    async deletOneColorProduct (id: number) {
        console.log(id)
        const color = await this.productsColorModel.destroy({where: {id}})
        return color
    }

}
