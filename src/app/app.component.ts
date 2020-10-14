import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Misael"
  nombre2: string = "MisAel NiVIO CortES"
  arreglo:number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  pi : number = Math.PI
  porcentaje:number = 0.2332
  salario: number = 2002.34
  heroe = {
    nombre:'Logan',
    clave:'Wolvernie',
    edad: 29,
    direccion: {
      calle:'jkwenwe',
      numero:'13'
    }
  }

  valorPromesa = new Promise(resolve=>{
    setTimeout(()=>{
      resolve('llego la data')
    }, 4500)
  })

  fecha: Date = new Date()

  videoStr: string = 'https://www.youtube.com/embed/Kp_n5DRinb0'
}
