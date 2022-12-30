import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  bikes: string[] = ['ycz', 'ybr', 'cb100', 'rider', 'r6'];
  borrada:string= '';
  borrarBike(){
    const bikeBorrada = this.bikes.shift() || '';
    this.borrada = bikeBorrada;
  };


  
}

