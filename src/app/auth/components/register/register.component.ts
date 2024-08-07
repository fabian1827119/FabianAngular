import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { users } from '../../../interfaces/users.interfaces';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/data/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  success:boolean = false;

  constructor(private authService:AuthService,
    private cookie:CookieService,
    private router:Router,
  private dataService:DataService) { }

  form:FormGroup=new FormGroup({
    names:new FormControl('',[Validators.required,Validators.minLength(3),Validators.required]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.required]),
    secondLastName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    roles:new FormControl('',[Validators.required]),
    username:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
  });

  onSubmit():void{

    const user:users = {
      names: this.form.value.names,
      lastName: this.form.value.lastName,
      secondLastName: this.form.value.secondLastName,
      roles: this.form.value.roles,
      username: this.form.value.username,
      password: this.form.value.password,
    }
    this.authService.register(user).subscribe(response =>{
      this.cookie.set('token',response);
      this.dataService.changeSuccess(true);
      this.router.navigate(['/home-users-page']);
      // this.router.navigate(['/user-list']);

      console.log(response);
    },
    error=>{
      console.log(error);
    });
  }

}
