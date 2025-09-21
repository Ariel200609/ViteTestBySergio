"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockTask = void 0;
class MockTask {
    tam;
    container = [];
    constructor() {
        this.tam = 0;
        this.container = new Array();
    }
    size() {
        return this.tam;
    }
    getTasks() {
        throw new Error("Method not implemented.");
    }
    getTask(id) {
        const resultado = this.container.find((task) => {
            return task.getId() === id;
        });
        if (resultado === undefined) {
            throw new Error("no ta");
        }
        return resultado;
    }
    addTask(tarea) {
        this.container.push(tarea);
        this.tam++;
    }
    deleteTask(id) {
        throw new Error("Method not implemented.");
    }
    editTask(id, tarea, cumplida) {
        throw new Error("Method not implemented.");
    }
}
exports.MockTask = MockTask;
//# sourceMappingURL=mockTask.js.map