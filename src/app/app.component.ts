import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica-2';

  indiceComponente: number = 0;

  onCambiarComponente(indice: number){
    this.indiceComponente = indice;
  }
}
