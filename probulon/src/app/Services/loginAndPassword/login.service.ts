import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const probulonUrl = "http://localhost:3000/users"

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor( private http: HttpClient) {}
  
}
