import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { login } from '../../../interfaces/login.interfaces';

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

  constructor(private authService:AuthService) { }

  onSubmit():void{
    const {username, password} = this.loginForm.value;
    const login:login = {
      username: username,
      password: password
    }
    this.authService.login(login);

  }

}
