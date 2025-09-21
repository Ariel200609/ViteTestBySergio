export class Task<ID> {


    constructor(
    protected id :ID,
    protected tarea :string,
    protected cumplida :boolean
    ){}
    // Getters
    public getId(): ID {
    return this.id;
    }

    public getTarea(): string {
    return this.tarea;
    }

    public getCumplida(): boolean {
    return this.cumplida;
    }

  // Setters
    public setId(id: ID): void {
        this.id = id;
    }

    public setTarea(tarea: string): void {
    this.tarea = tarea;
    }

    public setCumplida(cumplida: boolean): void {
    this.cumplida = cumplida;
    }
    

}