import { Injectable } from '@nestjs/common';
import { CreateProductsGenderDto } from './dto/create-products-gender.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductsGender } from './products-gender.model';

@Injectable()
export class ProductsGenderService {
    constructor(@InjectModel(ProductsGender) private productsGenderModel: typeof ProductsGender) {}

    async createGenderProduct (dto: CreateProductsGenderDto) {
        const color = await this.productsGenderModel.create(dto)
        return color
    }

    async getOneGenderProduct (id: number) {
        const color = await this.productsGenderModel.findOne({where: {id}})
        return color
    }

    async getAllGenderProduct () {
        const colors = await this.productsGenderModel.findAll()
        return colors
    }

    async deletOneGenderProduct (id: number) {
        const color = await this.productsGenderModel.destroy({where: {id}})
        return color
    }
}
