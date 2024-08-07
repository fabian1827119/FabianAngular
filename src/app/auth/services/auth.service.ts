import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../../interfaces/login.interfaces';
import { users } from '../../interfaces/users.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url: string = 'http://localhost:8085/auth';

  constructor(private http: HttpClient) { }

  login(data:login) {
    return this.http.post(`${this.url+'/login'}`,data,{responseType:'text'}).subscribe(response => {
      console.log(response);
    },error=>{
      console.log(error);
    });
   }

   register(data:users):Observable<any>{
    return this.http.post(`${this.url+'/register'}`,data,{responseType:'text'});
    // return this.http.post(`${this.url+'/register'}`,data,{responseType:'text'}).subscribe(response => {
    //   console.log(response);
    // },error=>{
    //   console.log(error);
    // });

   }
}
