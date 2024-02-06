import { Controller, Req, Request, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    
    @Get('all')
    findAllUsers() {
        return this.usersService.findAllUsers();
    }

    @Get(':id')
    findUserById(@Param() params: any) {
        return this.usersService.findUserById(params.id);
    }
}
