import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from './roles.model';
import { CreateRoleDto } from './dto/create-role.dto';


@Injectable()
export class RolesService {
    constructor(
        @InjectModel(Roles) private roleModel: typeof Roles,
    ) {}

    async foundRole(value: string){
        const check = await this.roleModel.findOne({where: {value}})
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
}
