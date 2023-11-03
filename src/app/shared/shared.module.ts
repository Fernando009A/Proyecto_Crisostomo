import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsProyectosComponent } from './components/cards-proyectos/cards-proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { TotalLotesPipe } from './pipes/total-lotes.pipe';
import { RouterModule } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EstructuraComponent } from './components/estructura/estructura.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardsProyectosComponent,
    FooterComponent,
    TotalLotesPipe,
    GaleriaComponent,
    ContactoComponent,
    EstructuraComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    CardsProyectosComponent,
    FooterComponent,
    GaleriaComponent,
    ContactoComponent,
    EstructuraComponent
  ]
})
export class SharedModule { }
