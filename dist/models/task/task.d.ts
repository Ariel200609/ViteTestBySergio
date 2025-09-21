export declare class Task<ID> {
    protected id: ID;
    protected tarea: string;
    protected cumplida: boolean;
    constructor(id: ID, tarea: string, cumplida: boolean);
    getId(): ID;
    getTarea(): string;
    getCumplida(): boolean;
    setId(id: ID): void;
    setTarea(tarea: string): void;
    setCumplida(cumplida: boolean): void;
}
//# sourceMappingURL=task.d.ts.map