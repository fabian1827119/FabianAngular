import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form:FormGroup=new FormGroup({
    names:new FormControl('',[Validators.required,Validators.minLength(3),Validators.required]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.required]),
    secondLastName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    roles:new FormControl('',[Validators.required]),
    username:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(6)]),

  });

}
