import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findAllUsers(): string {
        return 'all users';
    }

    findUserById(id: string): string {
        return 'User id: ' + id;
    }
}
