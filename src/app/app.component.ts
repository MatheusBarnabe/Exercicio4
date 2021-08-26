import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicio04';

  cursos = [
    {nome: 'Java', duracao: "72h"},
    {nome: 'Python', duracao: "64h"},
    {nome: 'Angular', duracao: "92h"},
    {nome: 'NodeJs', duracao: "64h"},
    {nome: 'NodeJs', duracao: "64h"},
  ]

  onPessoaAdcionada (curso) {
    this.cursos = [curso, ...this.cursos]
  }

}
