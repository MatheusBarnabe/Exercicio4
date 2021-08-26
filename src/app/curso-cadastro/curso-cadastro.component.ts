import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent {

  @Output () cursoAdcionado = new EventEmitter()
  
  adcionar (curso, duracao) {
    this.cursoAdcionado.emit({curso, duracao})
  }

}
