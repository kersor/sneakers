import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto, RegisterAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/register')
    async register(@Body() dto: RegisterAuthDto){
        return this.authService.register(dto)
    }

    @Post('/login')
    async login(@Body() dto: LoginAuthDto){
        return this.authService.login(dto)
    }

    @Get('/me/:id')
    async me(@Param('id') id: number){
        return this.authService.getUser(id)
    }
}
