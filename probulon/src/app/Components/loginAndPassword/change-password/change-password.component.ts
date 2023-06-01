import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, debounce, debounceTime } from 'rxjs';
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
  @Output() usrOutput: EventEmitter<Change>;
  usr: Change; 
  names: string; 
  emails: string; 
  mensage: string;
  detail: string; 
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
    this.usrOutput = new EventEmitter(); 
  }

  emailSelect(user: Change) {
    this.contenForm.controls['email'].setValue(user.email); 
    this.codeEmail = false; 
  }
  recuPassword(){
    let emaili: string = this.contenForm.controls['email'].value;
    this.usr = new Change(emaili); 
    this.servi.em(this.usr.email); 
    this.servi.sendCode(this.usr).subscribe((querry)=> {
       this.mensage = querry.message.summary; 
       this.detail = querry.message.detail;
       if(querry.message.statusCode==200){
         console.log(this.mensage + ' Detalle: ' + this.detail);
         this.route.navigate(['/home/confirm/']);
         this.usrOutput.emit(this.usr);
       }
    },
    (error)=>{
      alert('se produjo un error = '+ error.error.message.summary +', Detalle = ' + error.error.message.detail);
      
      console.error('se produjo un error', error.error.message.detail); 
    }
    );
  }
  ngOnInit(): void {
   
  }
  

  
}
