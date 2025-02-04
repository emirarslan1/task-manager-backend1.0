import { User } from 'src/users/user.entity';
export declare class Task {
    id: string;
    title: string;
    description: string;
    status: string;
    user: User;
}
