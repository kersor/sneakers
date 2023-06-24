import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { AddRoleDto, CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @Post()
    async createRole(@Body() dto: CreateRoleDto){
        return this.roleService.createRole(dto)
    }

    @Get('/:value')
    async foundRole(@Param('value') value: string){
        return this.roleService.foundRole(value)
    }

    @Delete('/:value')
    async deleteRole(@Param('value') value: string){
        return this.roleService.foundRole(value)
    }

    @Post('/add')
    async addRoleUser (@Body() dto: AddRoleDto) {
        return this.roleService.addRoleUser(dto)
    }

}
