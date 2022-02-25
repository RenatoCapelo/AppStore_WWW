import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userToAuth } from 'src/models/User/userToAuth.model';
import { UserToGet } from 'src/models/User/userToGet.model';
import { userToPost } from 'src/models/User/userToPost.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "https://api.appstore.renatoventura.pt/"
  constructor(private http: HttpClient) {}

  public login(user: userToAuth): Observable<UserToGet> {
    return this.http.post<UserToGet>(this.url+"Authentication",user);
  }

  public emailUsed(email:string){
    return this.http.post(this.url+"User",email);
  }

  public signUp(user: userToPost){
    return this.http.post(this.url+"user",user);
  }

}
