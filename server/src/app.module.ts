import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './auth/auth.model';
import { RolesModule } from './roles/roles.module';
import { Roles } from './roles/roles.model';
import { RolesUser } from './roles/roles-user.model';
import { ProductsColorModule } from './products-color/products-color.module';
import { ProductsColor } from './products-color/products-color.model';
import { ProductsGenderModule } from './products-gender/products-gender.module';
import { ProductsGender } from './products-gender/products-gender.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [User, Roles, RolesUser, ProductsColor, ProductsGender],
      autoLoadModels: true
    }),
    RolesModule,
    AuthModule,
    ProductsColorModule,
    ProductsGenderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
