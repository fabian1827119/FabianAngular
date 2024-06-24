import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from '../../interfaces/users.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }

  getUsers(){
    const url = 'http://localhost:8085/users/list';
    return this.http.get<users[]>(url);
  };

  createUser(data: FormData){
    const url = 'http://localhost:8085/users/create';
    return this.http.post<users>(url, data);
  }

  getUserId(id: number){
    const url = `http://localhost:8085/users/${id}`;
    return this.http.get<users>(url);
  }

  // updateUser(data: FormData, id: number){
  //   const url = `http://localhost:8085/users/${id}`;
  //   return this.http.put<String>(url, data);
  // }

  updateUser(data: FormData, id: number){
    const url = `http://localhost:8085/users/${id}`;
    return this.http.put(url,data,{responseType: 'text'});
  }

  deletedUser(id: number){
    const url = `http://localhost:8085/users/${id}`;
    return this.http.delete(url,{responseType: 'text'});
  }

}
