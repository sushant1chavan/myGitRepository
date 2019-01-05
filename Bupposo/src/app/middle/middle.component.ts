import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})

export class MiddleComponent implements OnInit {
  isLoginValidated: boolean = true;
  constructor(private loginFormComponent : LoginFormComponent) { }

  ngOnInit() {
    const newLocal = this;
    if(newLocal.loginFormComponent.loginValidated == this.isLoginValidated ){
        //alert("login successful");
    }
  }

}
