import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {

  misionVision: IMisionVisionInterface[] = [
    {
      titulo: "Misión",
      texto: "Crear proyectos seguros y de calidad, promoviendo el crecimiento de nuestro equipo y cuidando del entorno."
    },
    {
      titulo: "Visión",
      texto: "Ser líder nacional en proyectos inmobiliarios, ofreciendo soluciones integrales de calidad para viviendas"
    }
  ];

  listValores: ValorItem[] = [
    {
      valor: "Compromiso y Seguridad",
      img: "assets/img/msc/compromiso.webp"
    },
    {
      valor: "Transparencia y Profesionalismo.",
      img: "assets/img/msc/transparencia_profesionalismo.webp"
    },
    {
      valor: "Colaboración y Eficiencia.",
      img: "assets/img/msc/colaboracion_eficacion.webp"
    },
    {
      valor: "Respeto por la Diversidad.",
      img: "assets/img/msc/diversidad.webp"
    },
  ];

}

interface IMisionVisionInterface {
  titulo: string,
  texto: string
}

interface ValorItem {
  valor: string;
  img: string
}
