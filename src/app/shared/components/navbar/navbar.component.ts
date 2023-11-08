import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { INavegacionInterface } from 'src/app/core/models/INavegacion.interface';
import { IRedesInterface } from 'src/app/core/models/IRedes.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  /**
  * Elemento DOM que se refiere a la lista de navegación en el componente.
  */
  @ViewChild('listaNavegacion') mylista!: ElementRef; 

  /**
  * Elemento DOM que se refiere al botón de abrir el menú en el componente.
  */
  @ViewChild('abrir') myBtnAbrir!: ElementRef;

  /**
  * Elemento DOM que se refiere al botón de cerrar el menú en el componente.
  */
  @ViewChild('cerrar') myBtnCerrar!: ElementRef; 
  
  /**
  * Variable que almacena el estado activo del menú de navegación.
  */
  activo: boolean = false;

  constructor(private renderer2:Renderer2) { }

  /**
  * Lista de elementos de navegación que se mostrarán en la barra de navegación.
  */
  list_navegacion: INavegacionInterface[] = [
    {
      id: 1,
      nombre: "Nosotros",
      url: "/nosotros"
    },
    {
      id: 2,
      nombre: "Vende tu terreno",
      url: "/vende"
    },
    {
      id: 3,
      nombre: "Contactanos",
      url: "contactanos"
    },
    {
      id: 4,
      nombre: "Blog",
      url: "/blog"
    },
  ];

  /**
  * Lista de enlaces a redes sociales con sus respectivos nombres e imágenes de logotipos.
  */
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

  /**
  * Propiedad que almacena el ancho de la pantalla actual.
  */
  public getScreenWidth = window.innerWidth;

  /**
  * Escucha el evento de redimensionamiento de la ventana y actualiza el ancho de pantalla.
  * Si el ancho de pantalla es mayor que 768px, elimina la clase 'desplegable' del elemento de navegación.
  * @param $event Evento de redimensionamiento de la ventana.
  */
  @HostListener('window:resize', ['$event'])
    onWindowResize() {
    this.getScreenWidth = window.innerWidth;

    const listNavegacion = this.mylista.nativeElement;
    if (this.getScreenWidth > 768) {
      this.renderer2.removeClass(listNavegacion, 'desplegable');
    }
  }

  /**
  * Abre un enlace en una nueva pestaña del navegador.
  * @param link URL del enlace que se abrirá en una nueva pestaña.
  */
  abrirEnOtraPestana(link:string) {
    const url = link;
    window.open(url, '_blank');
  }

  /**
  * Desplaza la ventana del navegador al principio de la página.
  */
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  /**
  * Cierra el menú de navegación en pantallas pequeñas.
  * Restaura la visibilidad de los botones de abrir y cerrar el menú y elimina
  * la clase CSS que muestra el menú desplegable.
  */
  closeMenu() {
    // Obtener las referencias a los elementos del DOM
    const btnAbrir = this.myBtnAbrir.nativeElement;
    const btnCerrar = this.myBtnCerrar.nativeElement;

    // Ocultar el menú desplegable y restaurar la visibilidad de los botones
    this.renderer2.removeClass(this.mylista.nativeElement, 'desplegable');
    this.renderer2.setStyle(btnAbrir, 'display', 'block');
    this.renderer2.setStyle(btnCerrar, 'display', 'none');
  }

  /**
  * Abre o cierra el menú de navegación según el estado actual.
  * Actualiza la visibilidad de los botones de abrir y cerrar el menú y aplica
  * clases CSS para mostrar u ocultar el menú desplegable en pantallas pequeñas.
  */
  openCloseMenu() {
    // Obtener las referencias a los elementos del DOM
    const btnAbrir = this.myBtnAbrir.nativeElement;
    const btnCerrar = this.myBtnCerrar.nativeElement;

    // Cambiar el estado activo
    this.activo = !this.activo;

    // Comprobar si el ancho de la pantalla es menor que 768px
    if (this.getScreenWidth <= 768) {
      if(this.activo) {
        // Mostrar el menú desplegable y ocultar el botón de abrir
        this.renderer2.addClass(this.mylista.nativeElement, 'desplegable');
        this.renderer2.setStyle(btnAbrir, 'display', 'none');
        this.renderer2.setStyle(btnCerrar, 'display', 'block');
      } else {
        // Ocultar el menú desplegable y restaurar la visibilidad de los botones
        this.renderer2.removeClass(this.mylista.nativeElement, 'desplegable');
        this.renderer2.setStyle(btnAbrir, 'display', 'block');
        this.renderer2.setStyle(btnCerrar, 'display', 'none');
      }
    }
  }

}
