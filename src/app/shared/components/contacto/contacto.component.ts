import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICiudadesInterface } from 'src/app/core/models/ICiudades.interface';
import { IImagenInterface } from 'src/app/core/models/IProyecto.interface';
import { ListaCiudades } from 'src/app/mocks/ciudades.mock';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  /**
  * Propiedad de entrada que recibe una imagen de tipo IImagenInterface o es indefinida.
  */
  @Input() imagenInput: IImagenInterface | undefined;

  
  /**
  * Propiedad que almacena la URL de la imagen principal o es indefinida.
  */
  imagenPrincipal: string | undefined = "assets/img/msc/contactanos_df.webp";

  /**
  * Arreglo que almacena la lista de ciudades disponibles, inicializado con valores predefinidos.
  */
  ciudades: ICiudadesInterface[] = ListaCiudades;

  /**
  * FormGroup que representa el formulario de contacto.
  */
  formContacto: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder) {}

  /**
  * Hook del ciclo de vida que se llama después de que Angular haya inicializado todas las propiedades vinculadas a datos de un componente.
  * En este método, se crea y configura el formulario 'formContacto' utilizando FormBuilder.
  * Además, si se proporciona una imagen de entrada, se asigna su URL a 'imagenPrincipal'.
  */
  ngOnInit(): void {
    this.formContacto = this.formBuilder.group(
      {
        nombre: ['',[Validators.required]],
        apellidos: ['',[Validators.required]],
        dni: ['',[Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
        celular: ['',[Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
        correo: ['',[Validators.required, Validators.email]],
        ciudad: ['',[Validators.required]],
        direccion: ['', [Validators.required]],
        mensaje: ['']
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

  /**
  * Método que se llama al enviar el formulario.
  */
  submitFormulario() {
    console.table(this.formContacto.value);
  }
}
