import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { applicationCategory } from 'src/models/AppCategory/applicationCategory.model';
import { UrlsService } from '../urls/urls.service';

@Injectable({
  providedIn: 'root'
})
export class AppCategoriesService {
  constructor(private http: HttpClient, private url: UrlsService) { }


  public getCategoriesByMaster(masterCategoryID: number):Observable<applicationCategory[]>{
    return this.http.get<applicationCategory[]>(this.url.url+"AppCategories/GetByMaster/"+masterCategoryID,{
      headers: new HttpHeaders().append("Authorization","bearer "+localStorage.getItem('token'))
    });
  }

}
