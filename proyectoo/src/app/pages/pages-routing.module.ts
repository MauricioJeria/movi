import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AsigProfeComponent} from './asig-profe/asig-profe.component';
import {AsigAlumnoComponent} from './asig-alumno/asig-alumno.component';
import {AsistProfeComponent} from './asist-profe/asist-profe.component';
import {AsistAlumnoComponent} from './asist-alumno/asist-alumno.component';
import {RestablecerComponent} from './restablecer/restablecer.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'not-found' , component: NotFoundComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'asig-profe', component: AsigProfeComponent},
  { path: 'asig-alumno', component: AsigAlumnoComponent},
  { path: 'asist-profe', component: AsistProfeComponent},
  { path: 'asist-alumno', component: AsistAlumnoComponent},
  { path: 'restablecer', component: RestablecerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
