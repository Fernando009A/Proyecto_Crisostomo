import { Component, Input, OnInit } from '@angular/core';
import { IImagenInterface } from 'src/app/core/models/IProyecto.interface';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  // CM: El elemento padre transmite la informacion
  @Input() listImagenes: IImagenInterface[] | undefined = [];

  imagenPrincipal: string | undefined;

  ngOnInit(): void {
    if(this.listImagenes) {
      console.log(this.listImagenes);
      this.imagenPrincipal = this.listImagenes[0].url
    }
  }

  changeImage(url:string)  {
    // Cambia la imagen principal a la URL especificada
    this.imagenPrincipal = url;
  }

}
