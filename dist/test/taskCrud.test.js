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
});
//# sourceMappingURL=taskCrud.test.js.map