import { TaskCrud } from "./interface/taskCrud.Interface";
import { Task } from "./task";
export declare class MockTask implements TaskCrud<number> {
    protected tam: number;
    protected container: Array<Task<number>>;
    constructor();
    size(): number;
    getTasks(): Task<number>;
    getTask(id: number): Task<number>;
    addTask(tarea: Task<number>): void;
    deleteTask(id: number): void;
    editTask(id: number, tarea: string): Task<number>;
    editTask(id: number, cumplida: boolean): Task<number>;
    editTask(id: number, tarea: string, cumplida: boolean): Task<number>;
}
//# sourceMappingURL=mockTask.d.ts.map