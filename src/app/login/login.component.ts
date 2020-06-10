import { Component, OnInit } from '@angular/core';
import {LoginBean} from '../modelo/login-bean'
import {LoginService} from '../services/login.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  loginService : LoginService;
  router:Router;

  constructor(ls : LoginService, r:Router) { 
    this.loginService=ls;
    this.router= r;
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.email);
    console.log(this.password);

    let login:LoginBean;
    login = new LoginBean();
    login.email=this.email;
    login.password=this.password;
    

    this.loginService.login(login);

    this.router.navigateByUrl("/listadoUsuarios");
  }
  
}
