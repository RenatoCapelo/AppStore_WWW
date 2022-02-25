import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gender } from 'src/models/Gender/Gender.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  url = "https://api.appstore.renatoventura.pt/Gender"
  constructor(private httpClient: HttpClient) {}

  getAll(){
    return this.httpClient.get<Array<Gender>>(this.url);
  }
}
