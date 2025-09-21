"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const task_1 = require("../models/task/task");
const mockTask_1 = require("../models/task/mockTask");
(0, vitest_1.describe)('Pruebas de taskCrud', () => {
    const id = 1;
    const task = new task_1.Task(1, 'ir al super', false);
    const crud = new mockTask_1.MockTask();
    crud.addTask(task);
    (0, vitest_1.test)('addTask', () => {
        (0, vitest_1.expect)(crud.size()).toBe(1);
    });
    (0, vitest_1.test)('getTask', () => {
        const task = crud.getTask(id);
        (0, vitest_1.expect)(task.getId()).equals(1);
    });
    (0, vitest_1.test)('delete task', () => {
        const task2 = new task_1.Task(2, 'comprar pan', false);
        crud.addTask(task2);
        (0, vitest_1.expect)(crud.size()).toBe(2);
        crud.deleteTask(2);
        (0, vitest_1.expect)(crud.size()).toBe(1);
    });
    (0, vitest_1.test)('obtenerTareaPorid', () => {
        const tarea = crud.getTask(1);
        (0, vitest_1.expect)(tarea.getTarea()).toBe('ir al super');
    });
    //PUT /task/:id -> actualiza una tarea.
    (0, vitest_1.test)('actualizarTarea', () => {
        const tarea = crud.getTask(1);
        (0, vitest_1.expect)(tarea.getTarea()).toBe('ir al super');
        tarea.setTarea('ir al super y comprar pan');
        (0, vitest_1.expect)(tarea.getTarea()).toBe('ir al super y comprar pan');
    });
});
//# sourceMappingURL=taskCrud.test.js.map