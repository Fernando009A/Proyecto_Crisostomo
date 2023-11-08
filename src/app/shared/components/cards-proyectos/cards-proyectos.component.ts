import { Component } from '@angular/core';
import { IProyectoInterface } from 'src/app/core/models/IProyecto.interface';
import { ListaProyectos } from 'src/app/mocks/proyectos.mock';

@Component({
  selector: 'app-cards-proyectos',
  templateUrl: './cards-proyectos.component.html',
  styleUrls: ['./cards-proyectos.component.scss']
})
export class CardsProyectosComponent {

  listCards: IProyectoInterface[] = ListaProyectos;

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
