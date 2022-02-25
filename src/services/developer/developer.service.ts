import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeveloperToCreate } from 'src/models/Developer/DeveloperToCreate.model';
import { UserToGet } from 'src/models/User/userToGet.model';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private headers
  private url = "https://api.appstore.renatoventura.pt/"

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    })
  }

  postDev(dev:DeveloperToCreate):Observable<UserToGet>{
    this.headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    })
    return this.http.post<UserToGet>(this.url+"Developer",dev,{headers:this.headers})
  }
}
