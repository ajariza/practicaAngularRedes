import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoginBean} from '../modelo/login-bean';
import {Token} from '../modelo/token';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 
    
  }

  public login(login:LoginBean) {

    let result:string;

    console.log ("Llamando al servicio de login en regres.in...");
    console.log ("Parametros ...");
    console.log ("email =" + login.email);
    console.log ("password =" + login.password);


    // let body:string = "{\"email\": \"eve.holt@reqres.in\", \"password\": \"cityslicka\" }";

    this.http.post('https://reqres.in/api/login', login).subscribe(data => {
    //this.http.post('https://reqres.in/api/login', JSON.parse(body)).subscribe(data => {
      let response:string;
      let myToken:Token;
      response = JSON.stringify(data);
      console.log("-------POST-------->" + response);
      myToken=JSON.parse(response);
      console.log("-------myToken-------->" + myToken.token);

      localStorage.setItem("token", JSON.stringify(myToken));
      
    });

  }
}
