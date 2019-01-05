import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  constructor(private router : Router){

  }
  loginValidated: boolean = true;
  title = 'Angular 4 Project!';
  todaydate;
  componentproperty;
  emailid;
  formdata;
   ngOnInit() {
     this.formdata = new FormGroup({
        emailid: new FormControl("", Validators.compose([
           Validators.required,
           Validators.pattern("[^ @]*@[^ @]*")
        ])),
        passwd: new FormControl("", this.passwordvalidation)
     });
     this.formdata = new FormGroup({
      emailid: new FormControl("sushant@gmail.com"),
      passwd: new FormControl("abcd1234")
   });
  }
  passwordvalidation(formcontrol) {
     if (formcontrol.value.length < 5) {
        return {"passwd" : true};
     }
  }
  onClickSubmit(data) {
    this.emailid = data.emailid;
    //to check if login is valid or not
    if ( ( data.emailid == "sushant@gmail.com" ) && ( data.passwd == "abcd1234" ) ) {
      this.loginValidated = true;
      this.router.navigate(['successfulLogin']);
    }
  }
  onClickRegisterNow() {
      this.router.navigate(['registerNow']);
  }
}
