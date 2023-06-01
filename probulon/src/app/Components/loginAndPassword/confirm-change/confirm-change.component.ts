import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { Change } from 'src/app/Models/change.model';
import { Pass } from 'src/app/Models/newPass.model';
import { ChangePasswordService } from 'src/app/Services/loginAndPassword/change-password.service';

@Component({
  selector: 'app-confirm-change',
  templateUrl: './confirm-change.component.html',
  styleUrls: ['./confirm-change.component.scss']
})
export class ConfirmChangeComponent implements OnInit{
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
  chaPasswordi: Pass; 
  names: string; 
  emails: string; 
  mensage: string;
  validOrInvalid: string;
  constructor(private servi: ChangePasswordService, private route: Router) {
    this.contenForm = new FormGroup({
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
      password: new FormControl('', [
        Validators.pattern(
          /^.*(?=.{6,10})(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])(?=.*\d.*\d).*$/
        ),
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
      confirmPassword: new FormControl('', [
        Validators.pattern(
          /^.*(?=.{6,10})(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])(?=.*\d.*\d).*$/
        ),
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
    });
  }

  changePassword(){
    let email:string = this.servi.emaili;
    console.log(email);
    let codi: string = this.contenForm.controls['code'].value; 
    let password:string = this.contenForm.controls['password'].value;
    console.log(codi + password)
    let confirmPassword: string = this.contenForm.controls['confirmPassword'].value;
    this.chaPasswordi = new Pass(email,codi,password)
    if(password != confirmPassword){
      alert('Las contraceñas no Coinciden');
    }
    else{
      this.servi.changePassword(this.chaPasswordi).subscribe(querry => console.log(querry)); 
    }
  }
  
  ngOnInit(): void {
     
  }
  

  
}
