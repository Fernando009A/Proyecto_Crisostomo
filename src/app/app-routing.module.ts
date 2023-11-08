import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { ProyectoComponent } from './modules/proyecto/proyecto.component';
import { VendeComponent } from './modules/vende/vende.component';
import { BlogComponent } from './modules/blog/blog.component';
import { ContactanosComponent } from './modules/contactanos/contactanos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'proyecto/:id',
    component: ProyectoComponent
  },
  {
    path: 'vende',
    component: VendeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contactanos',
    component: ContactanosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
