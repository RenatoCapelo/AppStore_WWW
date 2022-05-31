import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
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
export class AppsPublishedPageComponent implements OnInit, AfterViewInit {

  displayedColumns:string[] = ["icon","packageName","title","applicationSize","ratingAverage","edit","delete"];
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

  constructor(public dialog:MatDialog, private _apps: AppsService, private _snackBar:MatSnackBar)
  {}

  appsDataSource=new MatTableDataSource(this.AppsByDev.results);
  gamesDataSource=new MatTableDataSource(this.GamesByDev.results);

  ngOnInit(): void {
    console.warn(localStorage.getItem('user'));
    this.updateApps(1,5)
    this.updateGames(1,5)
  }
  ngAfterViewInit(): void {
    this.appsDataSource.paginator = this.paginatorApps
  }

  openEditAppDialog(app:App):void{
    this.dialog.open(EditAppDialogComponent,{
      data:app
    })
  }
  openDeleteAppDialog(app:App):void{
    let dialogRef = this.dialog.open(DeleteAppDialogComponent,{
      data:app
    }).afterClosed().subscribe({next:(res)=>{
      switch(res.event){
        case "delete":
          this._snackBar.open("The app was successfully deleted",undefined,{
            duration: 1500,
            panelClass: ['blue-snackbar']
          })
          if(app.applicationCategory.masterCategory.id==1){
            this.updateApps(1,5);
          }
          else{
            this.updateGames(1,5);
          }
        break;
        case "error":
          this._snackBar.open("There was an error while deleting the app, try again",undefined,{
            duration: 1500,
            panelClass: ['red-snackbar']
          })
      }
    }})
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
        this.gamesDataSource = new MatTableDataSource<App>(res.results);
        this.paginatorGames.length = res.count;
      }
    })
  }
  updateApps(page:number,size:number){
    this._apps.getAppsByDev(JSON.parse(localStorage.getItem('user')!).developer.devGuid,page,size)
    .subscribe({
      next: (res)=>{
        this.appsDataSource = new MatTableDataSource<App>(res.results);
        this.paginatorApps.length = res.count;
      }
    })
  }
}
