import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { Request as ExpressRequest } from 'express';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(req: ExpressRequest): Promise<Task[]>;
    createTask(body: {
        title: string;
        description: string;
    }, req: ExpressRequest): Promise<Task>;
    updateTask(id: string, updateTaskDto: Partial<CreateTaskDto>): Promise<Task>;
    deleteTask(id: string): Promise<{
        message: string;
    }>;
}
