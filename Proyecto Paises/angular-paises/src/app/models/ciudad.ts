import { Clima } from "./clima"

export class Ciudad {
public nombre:String
public pais:String
public codigo:String
public clima:Clima
    constructor(nombre:String,pais:String,codigo:String,clima:Clima){
        this.nombre=nombre
        this.pais=pais
        this.codigo=codigo
        this.clima=clima
    }

}
