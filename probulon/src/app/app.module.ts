import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/loginAndPassword/login/login.component';
import { ChangePasswordComponent } from './Components/loginAndPassword/change-password/change-password.component';
import { BaseComponent } from './Components/controlPanelSystems/base/base.component';
import { HomeComponent } from './Components/home/home.component';
import {MatIconModule} from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmChangeComponent } from './Components/loginAndPassword/confirm-change/confirm-change.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangePasswordComponent,
    BaseComponent,
    HomeComponent,
    ConfirmChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
