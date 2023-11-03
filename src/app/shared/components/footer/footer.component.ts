import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { IDireccionInterface } from 'src/app/core/models/IDirecciones.interface';
import { INavegacionInterface } from 'src/app/core/models/INavegacion.interface';
import { IRedesInterface } from 'src/app/core/models/IRedes.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @ViewChildren('lista') mylista!: QueryList<ElementRef>

  constructor(private renderer2: Renderer2) { }

  list_compania: INavegacionInterface[] = [
    {
      id: 1,
      nombre: "Proyecto",
      url: "/proyectos"
    },
    {
      id: 2,
      nombre: "Nosotros",
      url: "/nosotros"
    },
    {
      id: 3,
      nombre: "Vende tu terreno",
      url: "/vende"
    },
    {
      id: 4,
      nombre: "Contactanos",
      url: "contactanos"
    },
  ];

  list_soporte: INavegacionInterface[] = [
    {
      id: 1,
      nombre: "Derechos Arco",
      url: ""
    },
    {
      id: 2,
      nombre: "Políticas de Cookies",
      url: ""
    },
    {
      id: 3,
      nombre: "Politicas de Privacidad",
      url: ""
    },
    {
      id: 4,
      nombre: "Terminos y Condiciones",
      url: ""
    },
  ]

  list_direcciones: IDireccionInterface[] = [
    {
      id: 1,
      direccion: "Calle Márquez de Mancera 290 - SEDE PISCO",
      url: "https://www.google.com/maps/place/C.+Arequipa+290,+Pisco+11601/@-13.7116442,-76.2020426,21z/data=!4m9!1m2!2m1!1sCalle+M%C3%A1rquez+de+Mancera+290+-+SEDE+PISCO!3m5!1s0x9110658b2a7c8fa5:0x109f731450d6ac7c!8m2!3d-13.7116442!4d-76.201761!16s%2Fg%2F11jcmyg67h?entry=ttu"
    },
    {
      id: 2,
      direccion: "Calle Chiclayo 173 - SEDE ICA",
      url: "https://www.google.com/maps/place//@-14.066346,-75.72996,18z/data=!4m5!1m2!2m1!1sCalle+Chiclayo+173+-+SEDE+ICA!3m1!15sCh1DYWxsZSBDaGljbGF5byAxNzMgLSBTRURFIElDQZIBEGdlb2NvZGVkX2FkZHJlc3PgAQA?entry=ttu"
    },
  ]

  list_redes: IRedesInterface[] = [
    {
      id: 1,
      nombre: "Facebook",
      logo: "assets/img/logos/logo_facebook.svg",
      link: "https://www.facebook.com/CrisostomoInmobiliaria/"
    },
    {
      id: 2,
      nombre: "Instagram",
      logo: "assets/img/logos/logo_instagram.svg",
      link: "https://www.instagram.com/crisostomo.inmobiliaria/",
    },
    {
      id: 3,
      nombre: "Tik Tok",
      logo: "assets/img/logos/logo_tiktok.svg",
      link: "https://www.tiktok.com/@crisostomoinmobiliaria",
    },
    {
      id: 4,
      nombre: "Whatsapp",
      logo: "assets/img/logos/logo_whatsapp.svg",
      link: "https://n9.cl/crisostomo_inmobiliaria",
    },
  ];

  public getScreenWidth = window.innerWidth;
  public getScreenHeight = window.innerHeight;

  @HostListener('window:resize', ['$event'])
    onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    const listaElements: QueryList<ElementRef> = this.mylista;
    if (this.getScreenWidth > 480) {

      // Itera sobre los elementos y establece el estilo en 'block' para cada uno
      listaElements.forEach((element) => {
        this.renderer2.setStyle(element.nativeElement, 'display', 'block');
      });
    } else {
      listaElements.forEach((element, index) => {
        this.renderer2.setStyle(element.nativeElement, 'display', 'none');
      });
    }
  }

  abrirEnOtraPestana(link:string) {
    const url = link;
    window.open(url, '_blank');
  }

  scrollToTop() {
    window.scrollTo(0, 0); // Desplazar la página al principio
  }

  OpenCloseFooter(n:number) {
    // Verificar si el ancho de la pantalla es menor a 480px usando una media query
    const isMobile = window.matchMedia('(max-width: 480px)').matches;
      if (isMobile) {
        // Obtén una matriz de elementos del DOM desde la QueryList
        const listaElements: QueryList<ElementRef> = this.mylista;
        listaElements.forEach((element, index) => {
        if (index == n) {
          // Si el índice coincide con el número pasado como parámetro, establece display en 'block'
          this.renderer2.setStyle(element.nativeElement, 'display', 'block');
          console.log(index, n);
        } else {
          // Si no coincide, establece display en 'none'
          this.renderer2.setStyle(element.nativeElement, 'display', 'none');
        }
      });
    }
  }


}
