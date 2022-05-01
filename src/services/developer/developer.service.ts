import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeveloperToCreate } from 'src/models/Developer/DeveloperToCreate.model';
import { UserToGet } from 'src/models/User/userToGet.model';
import { UrlsService } from '../urls/urls.service';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private headers

  constructor(private http:HttpClient,private url: UrlsService) {
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
    return this.http.post<UserToGet>(this.url.url+"Developer",dev,{headers:this.headers})
  }
}
