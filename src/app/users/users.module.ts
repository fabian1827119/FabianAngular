import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUsersPageComponent } from './pages/home-users-page/home-users-page.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeUsersPageComponent,
    UserListComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HomeUsersPageComponent,
    UserCreateComponent

  ]
})
export class UsersModule { }
