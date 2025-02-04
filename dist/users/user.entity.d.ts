import { Task } from "src/tasks/task.entity";
export declare class User {
    id: string;
    username: string;
    password: string;
    createdAt: Date;
    tasks: Task[];
}
