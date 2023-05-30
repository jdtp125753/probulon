import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/loginAndPassword/login/login.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'home', component: HomeComponent, children: [
    {path: 'login', component: LoginComponent}
  ]},
  {path:'', pathMatch:'full', redirectTo:'/home/login'},
  {path: '**', redirectTo:'/home/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
