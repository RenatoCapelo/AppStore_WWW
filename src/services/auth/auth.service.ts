import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userToAuth } from 'src/models/User/userToAuth.model';
import { UserToGet } from 'src/models/User/userToGet.model';
import { userToPost } from 'src/models/User/userToPost.model';
import { UrlsService } from '../urls/urls.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private url: UrlsService) {}

  public login(user: userToAuth): Observable<UserToGet> {
    return this.http.post<UserToGet>(this.url.url+"Authentication",user);
  }

  public emailUsed(email:string){
    return this.http.post(this.url.url+"User",email);
  }

  public signUp(user: userToPost){
    return this.http.post(this.url.url+"user",user);
  }

}
