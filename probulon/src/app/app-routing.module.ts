import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/loginAndPassword/login/login.component';
import { ChangePasswordComponent } from './Components/loginAndPassword/change-password/change-password.component';
import { ConfirmChangeComponent } from './Components/loginAndPassword/confirm-change/confirm-change.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'home', component: HomeComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'change', component: ChangePasswordComponent},
    {path: 'confirm', component: ConfirmChangeComponent}
  ]},
  {path:'', pathMatch:'full', redirectTo:'/home/login'},
  {path: '**', redirectTo:'/home/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
