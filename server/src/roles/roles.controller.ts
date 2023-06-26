import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { AddRoleDto, CreateRoleDto, RemoveRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @Delete('/remove')
    async removeRoleUser(@Body() dto: RemoveRoleDto){
        return this.roleService.removeRoleUser(dto)
    }

    @Post()
    async createRole(@Body() dto: CreateRoleDto){
        return this.roleService.createRole(dto)
    }

    @Get('/:value')
    async foundRole(@Param('value') value: string){
        return this.roleService.foundRole(value)
    }

    @Get()
    async getRoles(){
        return this.roleService.getRoles()
    }

    @Delete('/:value')
    async deleteRole(@Param('value') value: string){
        return this.roleService.deleteRole(value)
    }

    @Post('/add')
    async addRoleUser (@Body() dto: AddRoleDto) {
        return this.roleService.addRoleUser(dto)
    }

}
