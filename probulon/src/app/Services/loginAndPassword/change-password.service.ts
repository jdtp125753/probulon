import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Change } from 'src/app/Models/change.model';
const probulonUrl = "http://localhost:3000/users"
@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Change[]>{
    return this.http.get<Change[]>(probulonUrl); 
  }

  searchUser(querry: string):Observable<Change[]>{
    return this.http.get<Change[]>(probulonUrl,{
      params: new HttpParams().set('q', querry)
    })
  }
}
