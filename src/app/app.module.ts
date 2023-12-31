import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './modules/home/home.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { ProyectoComponent } from './modules/proyecto/proyecto.component';
import { VendeComponent } from './modules/vende/vende.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './modules/blog/blog.component';
import { ContactanosComponent } from './modules/contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ProyectoComponent,
    VendeComponent,
    BlogComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
