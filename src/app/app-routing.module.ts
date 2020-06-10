import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { ListadoRecursosComponent } from './listado-recursos/listado-recursos.component';


const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegistrarUsuarioComponent, pathMatch: "full" },
  { path: "recuperarContrasena", component: RecuperarContrasenaComponent, pathMatch: "full" },
  { path: "listadoUsuarios", component: ListadoUsuariosComponent, pathMatch: "full" },
  { path: "listadoRecursos", component: ListadoRecursosComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
