import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogIng } from 'src/app/Models/login.models';
import { LoginService } from 'src/app/Services/loginAndPassword/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  contenForm: FormGroup;
  validOrInvalid: string;
  valida: boolean = true;
  user: LogIng;

  constructor(private servi: LoginService) {
    this.contenForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/
        ),
      ]),
      password: new FormControl('', [
        Validators.pattern(
          /^.*(?=.{6,10})(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])(?=.*\d.*\d).*$/
        ),
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
    });
  }

  valid() {
    let emaili: string = this.contenForm.controls['email'].value;
    let passwordi: string = this.contenForm.controls['password'].value;

    this.user = new LogIng( emaili, passwordi); 

    this.servi.getLogin(this.user).subscribe(() => console.log('funciona'));

    /* 

    if (this.user.email != emaili && this.user.password != passwordi) {
      this.validOrInvalid = "El usuario es Invalido";
      this.valida = false;
    } else if (this.user.password != passwordi) {
      this.validOrInvalid = 'Su contraceña es incorrecta';
      this.valida = false;
    } else if (this.user.email != emaili) {
      this.validOrInvalid = 'su correo electronico es incorrecto';
      this.valida = false;
    } else {
      this.validOrInvalid = 'El usuario es valido';
      
      this.valida = false;
    } 

    */
    
  }
}
