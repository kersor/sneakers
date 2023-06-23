import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './auth.model';
import { LoginAuthDto, RegisterAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { RolesService } from 'src/roles/roles.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User) private userModel: typeof User,
        private roleService: RolesService, 
        private jwtService: JwtService
    ) {}

    async register(dto: RegisterAuthDto){
        const candidateEmail = await this.userModel.findOne({where: {email: dto.email}})
        if(candidateEmail) throw new HttpException('Пользователь с таким email уже зарегестрирован', HttpStatus.BAD_REQUEST)

        const candidateName = await this.userModel.findOne({where: {name: dto.name}})
        if(candidateName) throw new HttpException('Пользователь с таким именем уже зарегестрирован', HttpStatus.BAD_REQUEST)
        
        
        const hashPswrd = await bcrypt.hash(dto.password, 5)


        const role = await this.roleService.foundRole('USER')
        if(!role) {
            const role = await this.roleService.createRole({value: 'USER', description: 'Пользователь'})
            const user = await this.userModel.create({...dto, password: hashPswrd})

            await user.$set('roles', [role.toJSON().id])
            const access_token = await this.createToken(user.id, user.name)
            const fullUserInfo = await this.getUser(user.id)

            return {user: fullUserInfo, access_token}
        } else{
            const user = await this.userModel.create({...dto, password: hashPswrd})
            await user.$set('roles', [role.toJSON().id])

            const access_token = await this.createToken(user.id, user.name)
            const fullUserInfo = await this.getUser(user.id)

            return {user: fullUserInfo, access_token}
        }
    }

    async login (dto: LoginAuthDto) {

        const candidateEmail = await this.userModel.findOne({where: {email: dto.email}})
        if(!candidateEmail) throw new HttpException('Пароль или имя не верны 1 ', HttpStatus.BAD_REQUEST)

        console.log(candidateEmail)

        const password = await bcrypt.compare(dto.password, candidateEmail.password)
        console.log(password)
        if(!password)throw new HttpException('Пароль или имя не верны 2 ', HttpStatus.BAD_REQUEST)

        const access_token = await this.createToken(candidateEmail.id, candidateEmail.name)
        const user = await this.getUser(candidateEmail.id)
        
        return {user, access_token} 
    }

    async createToken (id: number, name: string) {
        const payload = {id, name}
        const token = await this.jwtService.signAsync(payload)

        return token
    }

    async getUser (id: number) {
        const fullUser = await this.userModel.findAll({where: {id}, include: {all: true}})
        return fullUser
    }
}
