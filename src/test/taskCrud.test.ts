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

    test('EditTask',()=>{
        const tarea = crud.editTask(1,'ir al super y comprar pan',true);
        expect(tarea.getTarea()).toBe('ir al super y comprar pan');
        expect(tarea.getCumplida()).toBeTruthy();
    })
    test('EditTask solo tarea',()=>{
        const tarea = crud.editTask(1,'ir al super y comprar pan y leche');
        expect(tarea.getTarea()).toBe('ir al super y comprar pan y leche');
        expect(tarea.getCumplida()).toBeTruthy();
    })
    test('EditTask solo cumplida',()=>{
        const tarea = crud.editTask(1,undefined,false);
        expect(tarea.getTarea()).toBe('ir al super y comprar pan y leche');
        expect(tarea.getCumplida()).toBeFalsy();
    })
    test('editTask sin parametros',()=>{    
        const tarea = crud.editTask(1);
        expect(tarea.getTarea()).toBe('ir al super y comprar pan y leche');
        expect(tarea.getCumplida()).toBeFalsy();
    })
    test('editTask completamente',()=>{    
        const tarea = crud.editTask(1,'ir al super y comprar pan y leche y huevos',true);
        expect(tarea.getTarea()).toBe('ir al super y comprar pan y leche y huevos');
        expect(tarea.getCumplida()).toBeTruthy();
    })

})  