import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppToGet } from 'src/models/App/AppToGet.model';
import { UrlsService } from '../urls/urls.service';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor(private http: HttpClient,private url: UrlsService) { }

  public getAppsByDev(devGuid: string):Observable<AppToGet>{
    let params = new HttpParams().set('devGuid', devGuid).set("masterCategory",1);
    return this.http.get<AppToGet>(this.url.url+"App",{
      params
    });
  }

  public getGamesByDev(devGuid: string):Observable<AppToGet>{
    let params = new HttpParams().set('devGuid', devGuid).set("masterCategory",2);
    return this.http.get<AppToGet>(this.url.url+"App",{
      params
    });
  }
}
