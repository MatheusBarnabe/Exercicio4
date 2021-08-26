import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent {

  @Output () pessoaAdcionada = new EventEmitter()
  
  adcionar (curso, duracao) {
    this.pessoaAdcionada.emit({curso, duracao})
  }

}
