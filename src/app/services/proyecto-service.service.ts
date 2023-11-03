import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IProyectoInterface } from '../core/models/IProyecto.interface';
import { ListaProyectos } from '../mocks/proyectos.mock';

@Injectable({
  providedIn: 'root'
})
export class ProyectoServiceService {

  constructor() {}

  getProyectos(): Observable<IProyectoInterface[]> {
    return of(ListaProyectos);
  }

  getProyectoById(id: number): Observable<IProyectoInterface | undefined> {
    const proyecto = ListaProyectos.find((p) => p.id === id);
    return of(proyecto);
  }

}
