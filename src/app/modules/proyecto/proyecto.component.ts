import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProyectoInterface } from 'src/app/core/models/IProyecto.interface';
import { ListaProyectos } from 'src/app/mocks/proyectos.mock';
import { ProyectoServiceService } from 'src/app/services/proyecto-service.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit, AfterViewInit {

  // CM: Variables de 
  @ViewChild('titulo') myTitulo!: ElementRef;
  @ViewChildren('bgCaracteristica') myBgCaracteristica!: QueryList<ElementRef>
  @ViewChildren('subtitulo') mySubtitulos!: QueryList<ElementRef>
  @ViewChildren('subtitulo2') mySubtitulos2!: QueryList<ElementRef>
  @ViewChildren('prim') myTbPrim!: QueryList<ElementRef>
  @ViewChildren('linea') myLineas!: QueryList<ElementRef>

  constructor(
    private route:ActivatedRoute, 
    private proyectoService:ProyectoServiceService,
    private renderer2: Renderer2
  ) {};
  
  proyectoId: number = 0;
  infoProyecto: IProyectoInterface | undefined;

  ngOnInit(): void {
    this.proyectoId = +this.route.snapshot.params['id']; // Convertir el ID a número
    // Llamar al servicio para obtener el proyecto por ID
    this.proyectoService.getProyectoById(this.proyectoId).subscribe((proyecto) => {
      this.infoProyecto = proyecto;
      if (!proyecto) {
        console.log('Proyecto no encontrado');
      }
    });
  }

  ngAfterViewInit() {
    if(this.infoProyecto) {
      window.scrollTo(0, 0);
      // Accede al elemento del DOM a través del ElementRef
      const miTitulo = this.myTitulo.nativeElement;
      const mibg: QueryList<ElementRef> = this.myBgCaracteristica;
      const miSubtitulos: QueryList<ElementRef> = this.mySubtitulos;
      const miSubtitulos2: QueryList<ElementRef> = this.mySubtitulos2;
      const miTbPrim: QueryList<ElementRef> = this.myTbPrim;
      const miLineas: QueryList<ElementRef> = this.myLineas;
      // CM: Cambiar el color del elemento
      this.renderer2.setStyle(miTitulo, 'color', this.infoProyecto?.colores.primario)
      // CM: Cambiar el color de fondo del elemento
      mibg.forEach((elementRef, index) => {
        this.renderer2.setStyle(elementRef.nativeElement, 'background-color', this.infoProyecto?.colores.primario);
      });
      // CM: Cambiar el color de los subtitulos
      miSubtitulos.forEach((elementRef, index) => {
        this.renderer2.setStyle(elementRef.nativeElement, 'color', this.infoProyecto?.colores.secundario);
      });
      // CM: Cambiar el color de los subtitulos2
      miSubtitulos2.forEach((elementRef, index) => {
        this.renderer2.setStyle(elementRef.nativeElement, 'color', this.infoProyecto?.colores.terciario);
      });
      // CM: Cambiar el color de los prim
      miTbPrim.forEach((elementRef, index) => {
        this.renderer2.setStyle(elementRef.nativeElement, 'background-color', this.infoProyecto?.colores.primario);
      });
      // CM: Cambiar el color de las lineas
      miLineas.forEach((elementRef, index) => {
        this.renderer2.setStyle(elementRef.nativeElement, 'border', this.infoProyecto?.colores.secundario  + ' solid 1px');
      });
    }
  }

}
