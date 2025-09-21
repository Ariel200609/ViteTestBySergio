"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    id;
    tarea;
    cumplida;
    constructor(id, tarea, cumplida) {
        this.id = id;
        this.tarea = tarea;
        this.cumplida = cumplida;
    }
    // Getters
    getId() {
        return this.id;
    }
    getTarea() {
        return this.tarea;
    }
    getCumplida() {
        return this.cumplida;
    }
    // Setters
    setId(id) {
        this.id = id;
    }
    setTarea(tarea) {
        this.tarea = tarea;
    }
    setCumplida(cumplida) {
        this.cumplida = cumplida;
    }
}
exports.Task = Task;
//# sourceMappingURL=task.js.map