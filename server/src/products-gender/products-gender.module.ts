import { Module } from '@nestjs/common';
import { ProductsGenderService } from './products-gender.service';
import { ProductsGenderController } from './products-gender.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsGender } from './products-gender.model';

@Module({
  controllers: [ProductsGenderController],
  providers: [ProductsGenderService],
  imports: [
    SequelizeModule.forFeature([ProductsGender])
  ]
})
export class ProductsGenderModule {}
