import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Roles } from './roles.model';
import { User } from 'src/auth/auth.model';
import { RolesUser } from './roles-user.model';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([Roles, User, RolesUser])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
