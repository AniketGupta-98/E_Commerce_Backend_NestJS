// user.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUsers() {
        return {
            message: 'User module working',
        };
    }
}
