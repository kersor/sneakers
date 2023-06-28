import { Module } from '@nestjs/common';
import { ProductsColorService } from './products-color.service';
import { ProductsColorController } from './products-color.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsColor } from './products-color.model';

@Module({
  controllers: [ProductsColorController],
  providers: [ProductsColorService],
  imports: [
    SequelizeModule.forFeature([ProductsColor])
  ]
})
export class ProductsColorModule {}
