import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getAllUsers(): Promise<User[]>;
    findOneByUsername(username: string): Promise<User | undefined>;
    createUser(username: string, password: string): Promise<User>;
    getUserById(id: string): Promise<User>;
}
