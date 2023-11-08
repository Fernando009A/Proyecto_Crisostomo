import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  constructor() { }

  ventajas: string[] = [
    "assets/img/msc/ventajas/ventaja1.svg",
    "assets/img/msc/ventajas/ventaja2.svg",
    "assets/img/msc/ventajas/ventaja3.svg",
    "assets/img/msc/ventajas/ventaja4.svg",
    "assets/img/msc/ventajas/ventaja5.svg",
  ];

  consejosInversiones: string[] = [
    "assets/img/msc/consejos_inversiones/card1.svg",
    "assets/img/msc/consejos_inversiones/card2.svg",
    "assets/img/msc/consejos_inversiones/card3.svg",
    "assets/img/msc/consejos_inversiones/card4.svg",
  ];
 
  consejosEstafas: IConsejoInterface[] = [
    {
      id: 1,
      titulo: 'Consejo 1',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      titulo: 'Consejo 1',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      titulo: 'Consejo 1',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      titulo: 'Consejo 1',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      titulo: 'Consejo 1',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      titulo: 'Consejo 1',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 6,
      titulo: 'Consejo 1',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.',
      image: 'https://picsum.photos/200/300',
    },    
  ];

  consejosCompra: IConsejoInterface[] = [
    {
      id: 1,
      titulo: "Selección de la Ubicación Perfecta",
      descripcion: "Descubre cómo elegir la ubicación que se adapte a tu estilo de vida y necesidades. La ubicación es un factor crucial al comprar una vivienda. Considera aspectos como la proximidad a tu lugar de trabajo, escuelas, centros comerciales y servicios. Además, investiga sobre la seguridad y el crecimiento futuro de la zona. Te brindamos consejos para tomar decisiones informadas y encontrar la ubicación perfecta para tu nuevo hogar.",
      image: "https://picsum.photos/200/300"
    },
    {
      id: 2,
      titulo: "Consejos para la Negociación",
      descripcion: "Aprende estrategias de negociación para obtener el mejor precio al comprar una vivienda. La negociación es una parte fundamental del proceso de compra. Te proporcionamos consejos sobre cómo realizar ofertas efectivas, qué aspectos considerar en las contrapropuestas y cómo llegar a un acuerdo beneficioso para ambas partes. Maximiza tus posibilidades de obtener un precio competitivo en tu próxima vivienda.",
      image: "https://picsum.photos/200/300"
    },
    {
      id: 3,
      titulo: "Diseño de Interiores",
      descripcion: "Descubre cómo personalizar el interior de tu nuevo hogar. El diseño de interiores es una parte emocionante de la compra de una vivienda. Aprende a planificar la disposición de tus muebles, elegir colores y estilos que reflejen tu personalidad y crear un espacio acogedor y funcional. Exploramos consejos de diseño que te ayudarán a transformar tu casa en un verdadero hogar.",
      image: "https://picsum.photos/200/300"
    },
    {
      id: 4,
      titulo: "Proceso de Financiamiento",
      descripcion: "Obtén información sobre opciones de financiamiento y préstamos hipotecarios. El financiamiento es un componente crucial en la compra de una vivienda. Te ofrecemos una visión general de las diferentes opciones de préstamos hipotecarios, tasas de interés, términos y procesos de aprobación. Comprende cómo funciona el proceso de financiamiento y cómo puedes obtener la mejor hipoteca para tus necesidades.",
      image: "https://picsum.photos/200/300"
    },
    {
      id: 5,
      titulo: "Mantenimiento del Hogar",
      descripcion: "Descubre cómo cuidar y mantener tu nueva vivienda en óptimas condiciones. Una vez que hayas adquirido tu hogar, es importante mantenerlo en buen estado a lo largo del tiempo. ",
      image: "https://picsum.photos/200/300"
    }
  ];

}

interface IConsejoInterface {
  id: number;
  titulo: string;
  descripcion: string;
  image?: string;
};
