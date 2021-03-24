import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { Clima } from 'src/app/models/clima';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {
    public ciudades:Ciudad[]
    public i:number
    public ocultar:boolean
  constructor() {
    this.ciudades=[
      new Ciudad("Madrid","Spain","MAD",new Clima(25,12,49)),
      new Ciudad("Barcelona","Spain","BCN",new Clima(24,10,33)),
      new Ciudad("Estocolmo","Sweeden","EST",new Clima(23,11,40)),
      new Ciudad("Moscow","Russia","MSW",new Clima(21,9,60))
    ]
    this.i=0
    this.ocultar=false
   }

  ngOnInit(): void {
  }

  enviar(ciudad: String,pais:String,codigo:String,viento:Number,temperatura:Number,precipitaciones:Number){
    this.ciudades.push(
      new Ciudad(ciudad,pais,codigo,new Clima(temperatura,viento,precipitaciones))
    )
    
  }

  mostrarClima(i:number){
    this.i = i;
    this.ocultar=true;
  }

}
