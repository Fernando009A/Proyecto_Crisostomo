import { Component, Input, OnInit } from '@angular/core';
import { IEstructuraInterface } from 'src/app/core/models/IProyecto.interface';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.scss']
})
export class EstructuraComponent implements OnInit {
  /**
  * Propiedad de entrada que recibe la estructura del proyecto de tipo IEstructuraInterface o es indefinida.
  */
  @Input() estructuraProyecto: IEstructuraInterface | undefined;

  /**
  * Propiedad que almacena la estructura del proyecto de tipo IEstructuraInterface o es indefinida.
  */
  estructura: IEstructuraInterface | undefined;

  /**
  * Hook del ciclo de vida que se llama después de que Angular haya inicializado todas las propiedades vinculadas a datos de una directiva
  */
  ngOnInit(): void {
    if(this.estructuraProyecto) {
      this.estructura = this.estructuraProyecto
    }
  }

}
