import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    // styleUrls: '../app.component.css'
})
export class HeroeComponent{
    nombre: string ='Ironman';
    edad: number = 45

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenernombre():string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre= 'daredevil';

    }
    cambiarEdad():void{
        this.edad= 15;
    }
}