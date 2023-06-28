import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsColorService } from './products-color.service';
import { CreateProductsColorDto } from './dto/create-products-color.dto';

@Controller('products-color')
export class ProductsColorController {
  constructor(private readonly productsColorService: ProductsColorService) {}

  @Post()
  async createColorProduct (@Body() dto: CreateProductsColorDto) {
    return this.productsColorService.createColorProduct(dto)
  }

  @Get('/:id')
  async getOneColorProduct (@Param('id') id: number) {
    return this.productsColorService.getOneColorProduct(id)
  }

  @Get()
  async getAllColorProduct () {
    return this.productsColorService.getAllColorProduct()
  }

  @Delete('/:id')
  async deletOneColorProduct (@Param('id') id: number) {
    return this.productsColorService.deletOneColorProduct(id)
  }


}
