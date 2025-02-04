import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    getAllTasksForUser(userId: string): Promise<Task[]>;
    createTask(title: string, description: string, userId: string): Promise<Task>;
    updateTask(id: string, updateTaskDto: Partial<CreateTaskDto>): Promise<Task>;
    deleteTask(id: string): Promise<void>;
}
