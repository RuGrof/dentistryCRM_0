import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component'
import {ProfileViewComponent} from './profile-view/profile-view.component'

const routes: Routes = [
  { path: 'users-list', component: UsersListComponent },
  { path: 'profile-view', component: ProfileViewComponent},
  { redirectTo: '/users-list', pathMatch: 'full', path: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
