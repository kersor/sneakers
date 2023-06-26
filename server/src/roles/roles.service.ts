import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from './roles.model';
import { AddRoleDto, CreateRoleDto, RemoveRoleDto } from './dto/create-role.dto';
import { User } from 'src/auth/auth.model';
import { RolesUser } from './roles-user.model';


@Injectable()
export class RolesService {
    constructor(
        @InjectModel(Roles) private roleModel: typeof Roles,
        @InjectModel(RolesUser) private rolesUserModel: typeof RolesUser,
        @InjectModel(User) private userModel: typeof User
    ) {}

    async foundRole(value: string){
        const check = await this.roleModel.findOne({where: {value}})
        return check
    }

    async deleteRole(value: string){
        if(value === 'USER') throw new HttpException(`Данную роль удалить нельзя`, HttpStatus.BAD_REQUEST)
        if(value === 'ADMIN') {
            const count = await this.roleModel.count({where: {value: 'ADMIN'}})
            console.log(count)
            if(count > 1) {
                const check = await this.roleModel.destroy({where: {value}})
                return check
            } else throw new HttpException(`Данную роль удалить нельзя`, HttpStatus.BAD_REQUEST)
        }
        const check = await this.roleModel.destroy({where: {value}})
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

    async getRoles () {
        const roles = await this.roleModel.findAll()
        return roles
    }

    async addRoleUser (dto: AddRoleDto) {
        console.log(dto)
        const user = await this.userModel.findOne({where: {id: dto.userId}})
        const role = await this.foundRole(dto.value)

        if(user && role) {
            await user.$add('roles', role.id)
            const userFull = await this.userModel.findOne({where: {id: user.id}, include: {all: true}})
            return userFull
        }
        else throw new HttpException(`Произошла ошибка во время передачи роли`, HttpStatus.BAD_REQUEST)
    }

    async removeRoleUser (dto: RemoveRoleDto) {
        const user = await this.userModel.findOne({where: {id: dto.userId}, include: {all: true}})
        const checkRole = user.roles.filter(item => item.value === dto.value)
        
        if(checkRole) {
            const roles = await this.rolesUserModel.destroy({where: {userId: dto.userId, roleId: checkRole[0].id}})
            const user = await this.userModel.findOne({where: {id: dto.userId}, include: {all: true}})
            return user
        }
        else throw new HttpException(`У пользователя нет такой роли`, HttpStatus.BAD_REQUEST)
    }
}
