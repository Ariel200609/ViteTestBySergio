import {test,expect,describe} from 'vitest';
import { Task } from '../models/task/task';
import { MockTask } from '../models/task/mockTask';
import { TaskCrud } from '../models/task/interface/taskCrud.Interface';

describe('Pruebas de taskCrud',()=>{
    const id =1 ;
    const task: Task<number> = new Task<number>(1,'ir al super',false);
    const crud : TaskCrud<number> = new MockTask();
    crud.addTask(task);

    test('addTask',()=>{
        expect(crud.size()).toBe(1);
    })

    test('getTask',()=>{
        const task = crud.getTask(id);
        expect(task.getId()).equals(1);
        
    })

})  