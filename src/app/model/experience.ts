export class Experience {
    id?: number;
    nombreExp: string;
    descripcionExp: string;

    constructor(nombreExp: string, descripcionExp: string){
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
    }
}
