import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  standalone: false,
  templateUrl: './temperatura.html',
  styleUrl: './temperatura.css',
})
export class Temperatura {

  temper!: number ;
  estadoClima: string = '';
  
  evaluarClima() {
    const valor = Number(this.temper);
    if (isNaN(valor)) {
      this.estadoClima = 'default'; 
      return;
    }
    if (valor > 30) {
      this.estadoClima = 'caliente';
    } else if (valor >= 15 && valor <= 30) {
      this.estadoClima = 'templado';
    } else {
      this.estadoClima = 'frio';
    }
  }
}

