import { Component, Input, OnInit } from '@angular/core';
import { IEstructuraInterface } from 'src/app/core/models/IProyecto.interface';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.scss']
})
export class EstructuraComponent implements OnInit {

  // CM: El elemento padre transmite la informacion
  @Input() estructuraProyecto: IEstructuraInterface | undefined;
  estructura: IEstructuraInterface | undefined

  ngOnInit(): void {
    if(this.estructuraProyecto) {
      console.log(this.estructuraProyecto);
      this.estructura = this.estructuraProyecto
    }
  }

}
