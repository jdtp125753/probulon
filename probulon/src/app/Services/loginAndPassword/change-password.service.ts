import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Change } from 'src/app/Models/change.model';
import { Pass } from 'src/app/Models/newPass.model';
const probulonSend = "https://probulon-cloud.com.es/api/v1/control-panel/auth/request-change-password"
const probulonChange = "https://probulon-cloud.com.es/api/v1/control-panel/auth/change-password"
@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  public emaili: string; 

  constructor(private http: HttpClient) { }


  sendCode(email: Change): Observable<any>{
    return this.http.post(probulonSend, email);
  }
  
  changePassword(password: Pass){
    return this.http.post(probulonChange, password); 
  }

  em(email: string):string{
    return this.emaili = email;
  }
 
}
