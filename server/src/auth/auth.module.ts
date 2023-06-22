import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './auth.model';
import { RolesUser } from 'src/roles/roles-user.model';
import { RolesModule } from 'src/roles/roles.module';
import { JwtModule } from '@nestjs/jwt';
import { Roles } from 'src/roles/roles.model';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    RolesModule,
    SequelizeModule.forFeature([User, RolesUser, Roles]),
    JwtModule.register({
      secret: 'SVOLOCHYO',
      signOptions: { expiresIn: '24h' },
    }),
  ]
})
export class AuthModule {}
