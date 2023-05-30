import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogIng } from 'src/app/Models/login.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  contenForm: FormGroup;
  validOrInvalid: string;
  valida: boolean = true;
  user: LogIng = new LogIng(1, 'jdt@email.com', '12asdf');

  constructor() {
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

  valid(): string {
    let emaili: string = this.contenForm.controls['email'].value;
    let passwordi: string = this.contenForm.controls['password'].value;

    if (this.user._email != emaili && this.user._password != passwordi) {
      this.validOrInvalid = "El usuario es Invalido";
      this.valida = false;
    } else if (this.user._password != passwordi) {
      this.validOrInvalid = 'Su contraceña es incorrecta';
      this.valida = false;
    } else if (this.user._email != emaili) {
      this.validOrInvalid = 'su correo electronico es incorrecto';
      this.valida = false;
    } else {
      this.validOrInvalid = 'El usuario es valido';
      this.valida = false;
    }
    return this.validOrInvalid;
  }
}
