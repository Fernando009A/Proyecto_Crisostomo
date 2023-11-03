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
// CM: El elemento padre transmite la informacion
  @Input() imagenInput: IImagenInterface | undefined;
  imagenPrincipal: string | undefined;
  ciudades: ICiudadesInterface[] = ListaCiudades;

  formContacto: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder) {}

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
      console.log(this.imagenInput);
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
