import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICiudadesInterface } from 'src/app/core/models/ICiudades.interface';
import { IImagenInterface } from 'src/app/core/models/IProyecto.interface';
import { ListaCiudades } from 'src/app/mocks/ciudades.mock';

@Component({
  selector: 'app-vende',
  templateUrl: './vende.component.html',
  styleUrls: ['./vende.component.scss']
})
export class VendeComponent implements OnInit {
  
  /**
  * Propiedad de entrada que recibe un objeto de tipo `IImagenInterface` o `undefined`.
  * Contiene información sobre la imagen relacionada con el formulario de contacto.
  */
  @Input() imagenInput: IImagenInterface | undefined;

  /**
  * Propiedad que almacena la URL de la imagen principal, inicializada como `undefined`.
  */
  imagenPrincipal: string | undefined;
  
  /**
  * Arreglo de ciudades de tipo `ICiudadesInterface`, inicializado con valores de `ListaCiudades`.
  */
  ciudades: ICiudadesInterface[] = ListaCiudades;

  /**
  * Formulario de contacto de tipo `FormGroup` que se inicializa vacío.
  */
  formContacto: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder) {}

  /**
  * Método del ciclo de vida llamado cuando se inicializa el componente.
  * - Se crea un formulario utilizando el formulario `formBuilder`, con validaciones para los campos.
  * - Se asigna el valor de `imagenInput.url` a `imagenPrincipal` si `imagenInput` tiene un valor.
  */
  ngOnInit(): void {
    this.formContacto = this.formBuilder.group(
      {
        nombre: ['',[Validators.required]],
        apellidos: ['',[Validators.required]],
        dni: ['',[Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
        celular: ['',[Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
        celular2: ['',[Validators.maxLength(9), Validators.minLength(9)]],
        correo: ['',[Validators.required, Validators.email]],
        ciudad: ['',[Validators.required]],
        direccion: ['', [Validators.required]],
        mensaje: [''],
        precio: ['', Validators.required],
      }
    )

    if(this.imagenInput) {
      this.imagenPrincipal = this.imagenInput.url
    }
  }

  get nombre() {
    return this.formContacto.get('nombre');
  }

  get apellidos() {
    return this.formContacto.get('apellidos');
  }

  get dni() {
    return this.formContacto.get('dni');
  }

  get celular() {
    return this.formContacto.get('celular');
  }

  get celular2() {
    return this.formContacto.get('celular2');
  }

  get correo() {
    return this.formContacto.get('correo');
  }

  get direccion() {
    return this.formContacto.get('direccion');
  }

  get ciudad() {
    return this.formContacto.get('ciudad');
  }

  get mensaje() {
    return this.formContacto.get('mensaje');
  }

  get precio() {
    return this.formContacto.get('precio');
  }

  submitFirmulario() {
    console.table(this.formContacto.value);
  }
}
