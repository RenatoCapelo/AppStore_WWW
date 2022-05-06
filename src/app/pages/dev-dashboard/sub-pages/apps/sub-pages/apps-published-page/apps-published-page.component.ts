import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { App } from 'src/models/App/App.model';
import { AppToGet } from 'src/models/App/AppToGet.model';
import { AppsService } from 'src/services/apps/apps.service';
import { DeleteAppDialogComponent } from '../../components/delete-app-dialog/delete-app-dialog.component';
import { EditAppDialogComponent } from '../../components/edit-app-dialog/edit-app-dialog.component';

@Component({
  selector: 'app-apps-published-page',
  templateUrl: './apps-published-page.component.html',
  styleUrls: ['./apps-published-page.component.sass']
})
export class AppsPublishedPageComponent implements OnInit {

  displayedColumns:string[] = ["packageName","title","applicationSize","ratingAverage","edit","delete"];
  AppsByDev: AppToGet={
    pages: 0,
    count: 0,
    results: []
  };
  GamesByDev: AppToGet={
    pages: 0,
    count: 0,
    results: []
  };

  @ViewChild("paginatorApps") paginatorApps!: MatPaginator
  @ViewChild("paginatorGames") paginatorGames!: MatPaginator

  constructor(public dialog:MatDialog, private _apps: AppsService)
  {}


  apps=new MatTableDataSource(this.AppsByDev.results);
  games=new MatTableDataSource(this.GamesByDev.results);



  openEditAppDialog(app:App):void{
    this.dialog.open(EditAppDialogComponent,{
      data:app
    })
  }
  openDeleteAppDialog(app:App):void{
    this.dialog.open(DeleteAppDialogComponent,{
      data:app
    })
  }

  ngOnInit(): void {
    console.warn(localStorage.getItem('user'));
    this.updateApps(1,5)
    this.updateGames(1,5)
  }

  pageChangeApps(event:PageEvent){
    let page = event.pageIndex + 1;
    let pageSize = event.pageSize;
    this.updateApps(page,pageSize);
  }
  pageChangeGames(event:PageEvent){
    let page = event.pageIndex + 1;
    let pageSize = event.pageSize;
    this.updateGames(page,pageSize);
  }

  updateGames(page:number,size:number){
    this._apps.getGamesByDev(JSON.parse(localStorage.getItem('user')!).developer.devGuid,page,size)
    .subscribe({
      next: (res)=>{
        this.GamesByDev = res;
        this.games.data=this.GamesByDev.results;
        this.games.paginator = this.paginatorGames;
      }
    })
  }
  updateApps(page:number,size:number){
    this._apps.getAppsByDev(JSON.parse(localStorage.getItem('user')!).developer.devGuid,page,size)
    .subscribe({
      next: (res)=>{
        this.AppsByDev = res;
        this.apps.data = this.AppsByDev.results;
        this.apps.paginator = this.paginatorApps;
        this.apps.data.length = res.count;
      }
    })
  }

}
