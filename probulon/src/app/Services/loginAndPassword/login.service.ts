import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogIng } from 'src/app/Models/login.models';

const probulonUrl = "https://probulon-cloud.com.es/api/v1/control-panel/auth/login"

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor( private http: HttpClient) {}

  getLogin(user: LogIng){
    return this.http.post(probulonUrl, user);
  }

}
