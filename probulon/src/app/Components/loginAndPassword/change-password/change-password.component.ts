import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounce, debounceTime } from 'rxjs';
import { Change } from 'src/app/Models/change.model';
import { ChangePasswordService } from 'src/app/Services/loginAndPassword/change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  contenForm: FormGroup;
  valida: boolean = true;
  code: boolean = true;
  codeEmail: boolean = true; 
  codeding: boolean = false;
  mens: boolean;
  passwording: boolean = false; 
  users: Change[];
  useris: Change[];
  usr: Change;
  
  names: string; 
  emails: string; 
  mensage: string;
  validOrInvalid: string;
  constructor(private servi: ChangePasswordService, private route: Router) {
    this.contenForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/
        ),
      ]),
    });
  }

  emailSelect(user: Change) {
    this.contenForm.controls['email'].setValue(user.email); 
    this.codeEmail = false; 
  }
  recuPassword(){
    this.route.navigate(['/home/confirm/'])
  }
  ngOnInit(): void {
    this.searchInput();
  }
  searchInput() {
    this.contenForm.controls['email'].valueChanges
      .pipe(debounceTime(1000))
      .subscribe((querry: string) => {
        this.servi.searchUser(querry).subscribe((result) => {
          this.users = result;
        });
        let filterEmail = this.users.filter((user)=>user.email==querry);
        this.useris = filterEmail; 
        if(this.codeEmail == true){
          this.code = false; 
        }else{
          this.code = true; 
        }
      });
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
