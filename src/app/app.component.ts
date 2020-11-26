import { Component } from '@angular/core';
import { Lembrete } from './lembretes/lembrete.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //funcao adicione o cliente recebido a uma lista.
  // A lista precisa ser definida pelo componente principal
  lembretes: Lembrete[] = [];
  onClienteAdicionado(lembrete) {
    this.lembretes = [...this.lembretes, lembrete];
  }
}
