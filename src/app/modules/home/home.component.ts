import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  listPasos: IPasosLoteInterface[] = [
    {
      id: 1,
      nombre: 'Elige la mejor ubicación',
      texto: 'Te asesoramos para encontrar tu lote',
      img: 'assets/img/logos/paso1.svg'
    },
    {
      id: 2,
      nombre: 'Separa tu lote ¡Hoy!',
      texto: 'A precios increibles',
      img: 'assets/img/logos/paso2.svg'
    },
    {
      id: 3,
      nombre: 'Elige tu plan de cuotas',
      texto: 'Aprovecha las facturas de pago',
      img: 'assets/img/logos/paso3.svg'
    },
    {
      id: 4,
      nombre: 'Firmado de contrato',
      texto: 'Disfruta todos los beneficios',
      img: 'assets/img/logos/paso4.svg'
    },
    {
      id: 5,
      nombre: 'Copia Literal',
      texto: 'Totalmente Saneado',
      img: 'assets/img/logos/paso5.svg'
    },
  ]

}

interface IPasosLoteInterface {
  id: number;
  nombre: string;
  texto: string;
  img: string;
}
