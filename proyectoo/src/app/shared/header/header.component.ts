import { Component, OnInit, Inject, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';
import { DatosService } from 'src/app/servicios/datos.service';


interface UsuarioAPI { // Definir la interface para los usuarios de la API
  id: string,
  usuario: string,
  clave: string,
  nombre: string,
  phone: string,
  rol: string

}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  nombre: string; // Campo para almacenar el nombre
  private sharedService = inject(DatosService); // Obtener el servicio de datos personales

  private authService = inject(AuthService); // Obtener el servicio de autenticación
  usuario: string; // Campo para almacenar el nombre del usuario
  usuarioCompleto: UsuarioAPI; // Campo para almacenar el nombre del usuario

  subscriptionDatosPersonales: Subscription; // Subscripción para el observable del nombre del usuario
  subscriptionAuthService: Subscription; // Subscripción para el observable del estado de autenticación
  constructor() { }

  ngOnInit() {
    this.subscriptionDatosPersonales = this.sharedService.nombre$.subscribe(nombre => {
      this.nombre = nombre
      console.log('Header:', nombre);
    }); // Obtiene el nombre del

    this.subscriptionAuthService = this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario
      console.log('Header:', usuario);
    }); // Obtiene el nombre del usuario logueado

    this.subscriptionAuthService = this.authService.usuarioCompleto$.subscribe(usuarioCompleto => {
      this.usuarioCompleto = usuarioCompleto;
    });
  }

  ngOnDestroy() {
    this.subscriptionDatosPersonales?.unsubscribe(); // Desuscribirse del observable del nombre del usuario
    this.subscriptionAuthService?.unsubscribe(); // Desuscribirse del observable del estado de autenticación
  }
}


