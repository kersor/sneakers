import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsGenderService } from './products-gender.service';
import { CreateProductsGenderDto } from './dto/create-products-gender.dto';

@Controller('products-gender')
export class ProductsGenderController {
  constructor(private readonly productsGenderService: ProductsGenderService) {}

  @Post()
  async createGenderProduct (@Body() dto: CreateProductsGenderDto) {
    return this.productsGenderService.createGenderProduct(dto)
  }

  @Get('/:id')
  async getOneGenderProduct (@Param('id') id: number) {
    return this.productsGenderService.getOneGenderProduct(id)
  }

  @Get()
  async getAllGenderProduct () {
    return this.productsGenderService.getAllGenderProduct()
  }

  @Delete('/:id')
  async deletOneGenderProduct (@Param('id') id: number) {
    return this.productsGenderService.deletOneGenderProduct(id)
  }

}
