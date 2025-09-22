import { TaskCrud } from "./interface/taskCrud.Interface";
import { Task } from "./task";

export class MockTask implements TaskCrud<number> {

    protected tam:number;
    protected container:Array<Task<number>>=[];
    constructor() {
        this.tam =0;
        this.container = new Array<Task<number>>();
    }
    size(): number {
        return this.tam;
    }
    getTasks(): Task<number>[] {
        return this.container;
    }
    getTask(id: number): Task<number> {

        const resultado = this.container.find((task : Task <number>)=>{
            return task.getId()===id;
        })
        if (resultado===undefined) {
            throw new Error("no ta");
        }
        return resultado;
    }
    addTask(tarea: Task<number>): void {
        this.container.push(tarea);
        this.tam++;
    }
    deleteTask(id: number): void {
        const index = this.container.findIndex((task : Task <number>)=>{
            return task.getId()===id;
        })
        if (index!==-1) {
            this.container.splice(index,1);
            this.tam--;
        }
        
    }
    editTask(id: number, tarea?: string, cumplida?: boolean): Task<number> {
            const task = this.getTask(id);
            if (tarea !== undefined) task.setTarea(tarea);
            if (cumplida !== undefined) task.setCumplida(cumplida);
            return task;
    }

}