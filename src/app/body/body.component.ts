import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {LoginBean} from '../modelo/login-bean'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

    constructor(loginService : LoginService) { 

      let login:LoginBean;
      login = new LoginBean();
      login.email="eve.holt@reqres.in";
      login.password="cityslicka";

    loginService.login(login);
  }

  ngOnInit(): void {
  }

}
