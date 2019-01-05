import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-now',
  templateUrl: './register-now.component.html',
  styleUrls: ['./register-now.component.css']
})
export class RegisterNowComponent implements OnInit {
  requiredErrorMessage = "This filed is required";
  requiredNameErrorMessage ;
  registerMeForm : FormGroup ;
  registerEmail;
  registerPassword;
  registerCreateProfileFor;
  registerName : String = "";
  registerDOB;
  registerMobileNo;
  
  constructor() { }

  ngOnInit() {
    this.registerMeForm = new FormGroup({
      registerEmail: new FormControl("", Validators.compose([
         Validators.required,
         Validators.pattern("[^ @]*@[^ @]*")
      ])),
      registerPassword: new FormControl(""),
      registerCreateProfileFor : new FormControl(""),
      registerName: new FormControl("",Validators.required),
      registerDOB: new FormControl(""),
      registerMobileNo: new FormControl("")
   });

   this.registerMeForm.get('registerName').valueChanges.subscribe(
    (registerName) => {
      if(registerName.length < '3'){
        this.registerMeForm.get('registerName').setValidators([Validators.required,Validators.minLength(3)]);
        this.requiredNameErrorMessage = "Name should be 3 characters long!"
      }
      else{
        this.registerMeForm.get('registerName').setValidators(Validators.required);
        this.requiredNameErrorMessage = "Name field is required!"
      }
      this.registerMeForm.get('registerName').updateValueAndValidity();
    }
   )
  }

}
