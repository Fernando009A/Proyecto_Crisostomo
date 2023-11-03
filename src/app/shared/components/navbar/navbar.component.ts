import { Component } from '@angular/core';
import { INavegacionInterface } from 'src/app/core/models/INavegacion.interface';
import { IRedesInterface } from 'src/app/core/models/IRedes.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  list_navegacion: INavegacionInterface[] = [
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

  abrirEnOtraPestana(link:string) {
    const url = link;
    window.open(url, '_blank');
  }

  scrollToTop() {
    window.scrollTo(0, 0); // Desplazar la página al principio
  }

}
