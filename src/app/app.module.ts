import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { ListadoRecursosComponent } from './listado-recursos/listado-recursos.component';
import { DetalleUsuariosComponent } from './detalle-usuarios/detalle-usuarios.component';
import { DetalleRecursosComponent } from './detalle-recursos/detalle-recursos.component';

// Para usar servicios Web incluimos estas directivas
import { FormsModule} from '@angular/forms';
// Fin de imports para uso de formularios

// Para usar servicios Web incluimos estas directivas
import { HttpClientModule} from  '@angular/common/http';
// Fin de imports para uso de servicios Web

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    RecuperarContrasenaComponent,
    ListadoUsuariosComponent,
    ListadoRecursosComponent,
    DetalleUsuariosComponent,
    DetalleRecursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    // Para usar servicios Web incluimos estas directivas
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
