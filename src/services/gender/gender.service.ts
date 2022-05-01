import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gender } from 'src/models/Gender/Gender.model';
import { UrlsService } from '../urls/urls.service';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private httpClient: HttpClient,private url: UrlsService) {}

  getAll(){
    return this.httpClient.get<Array<Gender>>(this.url.url+"Gender");
  }
}
