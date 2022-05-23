import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { App } from 'src/models/App/App.model';
import { appPhoto } from 'src/models/App/appPhoto.model';
import { AppToGet } from 'src/models/App/AppToGet.model';
import { UrlsService } from '../urls/urls.service';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor(private http: HttpClient,private url: UrlsService) { }

  public getAppsByDev(devGuid: string,page:number,size:number):Observable<AppToGet>{
    let params = new HttpParams()
    .set('devGuid', devGuid)
    .set("masterCategory",1)
    .set("pageNumber",page)
    .set("pageSize",size);
    return this.http.get<AppToGet>(this.url.url+"App",{
      params
    });
  }

  public getGamesByDev(devGuid: string,page:number,size:number):Observable<AppToGet>{
    let params = new HttpParams().set('devGuid', devGuid).set("masterCategory",2).set("pageNumber",page)
    .set("pageSize",size);
    return this.http.get<AppToGet>(this.url.url+"App",{
      params
    });
  }

  public publishApp(body:any):Observable<App>{
    return this.http.post<App>(this.url.url+"App",body,{
      headers: new HttpHeaders().append("Authorization","bearer "+localStorage.getItem('token'))
    });
  }

  public deleteApp(appGuid:string){
    return this.http.delete<number>(this.url.url+"App/"+appGuid,{
      headers: new HttpHeaders().append("Authorization","bearer "+localStorage.getItem('token'))
    })
  }

  public publishPhotos(appGuid:string,photos:appPhoto[]){
    return this.http.post<string[]>(this.url.url+"App/Photos/"+appGuid,photos,{
      headers: new HttpHeaders().append("Authorization","bearer "+localStorage.getItem('token'))
    })
  }
}
