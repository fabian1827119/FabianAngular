import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './users/components/user-create/user-create.component';
import { UserListComponent } from './users/components/user-list/user-list.component';

const routes: Routes = [
  { path: 'create-user', component: UserCreateComponent },
  { path: 'create-user/:id', component: UserCreateComponent },
  { path: 'user-list', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
