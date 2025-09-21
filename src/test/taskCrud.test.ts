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
    
    test('delete task',()=>{
        const task2: Task<number> = new Task<number>(2,'comprar pan',false);
        crud.addTask(task2);
        expect(crud.size()).toBe(2);
        crud.deleteTask(2);
        expect(crud.size()).toBe(1);
        
    })
    
    test ('obtenerTareaPorid',()=>{
        const tarea = crud.getTask(1);
        expect(tarea.getTarea()).toBe('ir al super');
    })

    
    //PUT /task/:id -> actualiza una tarea.
    test('actualizarTarea',()=>{
        const tarea = crud.getTask(1);
        expect(tarea.getTarea()).toBe('ir al super');
        tarea.setTarea('ir al super y comprar pan');
        expect(tarea.getTarea()).toBe('ir al super y comprar pan');
    })
})  