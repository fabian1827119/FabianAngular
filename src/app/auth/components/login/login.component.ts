import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup=new FormGroup({
    username: new FormControl(
      '',
      [Validators.required, Validators.email]
    ),
    password: new FormControl(
      '',
      [Validators.required, Validators.minLength(6)]),
  });

  onSubmit(){}

}
