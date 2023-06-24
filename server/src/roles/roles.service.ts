import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from './roles.model';
import { AddRoleDto, CreateRoleDto } from './dto/create-role.dto';
import { User } from 'src/auth/auth.model';


@Injectable()
export class RolesService {
    constructor(
        @InjectModel(Roles) private roleModel: typeof Roles,
        @InjectModel(User) private userModel: typeof User
    ) {}

    async foundRole(value: string){
        const check = await this.roleModel.findOne({where: {value}})
        return check
    }

    async deleteRole(value: string){
        const check = await this.roleModel.findOne({where: {value}})
        if(!check) throw new HttpException(`Такой роли не существует`, HttpStatus.NOT_FOUND)

        check.destroy()
        return check
    }

    async createRole(dto: CreateRoleDto){
        const checkRole = await this.foundRole(dto.value)
        if(!checkRole) {
            const role = await this.roleModel.create({value: dto.value, description: dto.description})
            return role 
        } 
        else throw new HttpException(`Роль ${dto.value} существует`, HttpStatus.BAD_REQUEST)
    }

    async addRoleUser (dto: AddRoleDto) {
        console.log(dto)
        const user = await this.userModel.findOne({where: {id: dto.userId}})
        const role = await this.foundRole(dto.value)

        if(user && role) {
            await user.$add('roles', role.id)
            const userFull = await this.userModel.findOne({where: {id: user.id}})
            return userFull
        }
        else throw new HttpException(`Произошла ошибка во время передачи роли`, HttpStatus.BAD_REQUEST)
    }
}
