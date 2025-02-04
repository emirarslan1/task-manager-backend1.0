import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<User[]>;
    register(body: CreateUserDto): Promise<User>;
    getUser(id: string): Promise<User>;
}
