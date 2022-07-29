export class Project {
    id?: number;
    nombreProj: string;
    descripcionProj: string;

    constructor(nombreProj: string, descripcionProj: string){
        this.nombreProj = nombreProj;
        this.descripcionProj = descripcionProj;
    }
}