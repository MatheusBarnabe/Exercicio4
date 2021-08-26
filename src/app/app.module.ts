import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';
import { CursoCartaoComponent } from './curso-cartao/curso-cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoCadastroComponent,
    CursoCartaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
