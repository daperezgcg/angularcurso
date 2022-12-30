import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `<h1>{{'/' + title}}</h1>
    <h1>{{'Base ' + base}}</h1>
    
    <button (click)="acumular(+base)">+1</button>
    <span> {{numero}} </span>
    <button (click)="acumular(-base)">-1</button>`,
    // styleUrls: ['../app.component.css']


})

export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 0;
    base: number = 5;
  
    acumular( valor: number){
      this.numero += valor;
    }
}