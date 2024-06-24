import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { users } from '../../../interfaces/users.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  users: users[] = [];
  showComponent:boolean = false;

  constructor(
    private userServices:UserService,
    private router:Router
  ) { }


  ngOnInit(){
    this.getUsers();
  }


  getUsers(){
    // const allUsers= this.userServices.getUsers();
    this.userServices.getUsers().subscribe((users)=>{
      this.users = users;
      console.log(users);
    });
  }

  editUser(userId: number){
    console.log(userId);
    this.router.navigate(['create-user', userId]);
  }

  deletedUser(userId: number){
    if(userId){

      this.userServices.deletedUser(userId).subscribe(
        response => {
          debugger
          console.log(response);
          // this.router.navigate(['/user-list']);
          this.getUsers();
        },
        (error) => {
          debugger;
          console.log(error);
        }
      );
    }

  }

}
