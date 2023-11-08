import { Component, Input, OnInit } from '@angular/core';
import { IImagenInterface } from 'src/app/core/models/IProyecto.interface';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
/**
 * Componente que muestra una galería de imágenes y permite cambiar la imagen principal al hacer clic en una miniatura.
 */
export class GaleriaComponent implements OnInit {

  /**
   * Lista de objetos de tipo IImagenInterface que contienen la información de cada imagen a mostrar en la galería.
   */
  @Input() listImagenes: IImagenInterface[] | undefined = [];

  /**
  * URL de la imagen principal que se muestra en el componente, puede ser indefinida.
  */
  imagenPrincipal: string | undefined;

  /**
  * Método que se ejecuta cuando se inicia el componente. 
  * Asigna la URL de la primera imagen de la lista de imágenes como imagen principal si la lista de imágenes existe.
  */
  ngOnInit(): void {
    if(this.listImagenes) {
      this.imagenPrincipal = this.listImagenes[0].url
    }
  }

  /**
  * Cambia la imagen principal mostrada en el componente a la proporcionada URL.
  * @param url URL de la imagen que se convertirá en la nueva imagen principal.
  */
  changeImage(url:string)  {
    this.imagenPrincipal = url;
  }

}
