import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangePassword } from 'src/app/Models/change.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  contenForm: FormGroup;
  validOrInvalid: string;
  valida: boolean = true;
  code: boolean = true;
  codeding: boolean = false;
  users: ChangePassword[] = [
    {_name:'Julian', _email:'julian@email.com'},
    {_name:'Juliana', _email:'juliana@email.com'},
    {_name:'Fenanda', _email:'Fernanda@email.com'},
    {_name:'El Abuelo Hand', _email:'Hand@email.com'}
  ];
  constructor() {
    this.contenForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/
        ),
      ]),
      
    });
  }
  codingSend(user:string): boolean{
    this.contenForm.controls['email'].setValue(user)
    return this.code = !this.code; 
  }
  changePassword():boolean{
    return this.codeding == !this.codeding;
  }
  /* 
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
  */
}
