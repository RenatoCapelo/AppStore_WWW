import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { App } from 'src/models/App/App.model';
import { AppsService } from 'src/services/apps/apps.service';
import { DeleteAppDialogComponent } from '../../components/delete-app-dialog/delete-app-dialog.component';
import { EditAppDialogComponent } from '../../components/edit-app-dialog/edit-app-dialog.component';

// const AppsByDev: AppToGet[]=[
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:1,idAppCategory:1,minsdkversion:25,applicationSize:250000,applicationGuid:"adsdasasdasdadaads",name:"ooga",nameinstore:"oogabooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"},
//   {idDeveloper:2,idAppCategory:2,minsdkversion:28,applicationSize:300000,applicationGuid:"bogasasdasdadsd",name:"booga",nameinstore:"boogaooga"}
// ];

@Component({
  selector: 'app-apps-published-page',
  templateUrl: './apps-published-page.component.html',
  styleUrls: ['./apps-published-page.component.sass']
})
export class AppsPublishedPageComponent implements OnInit {

  displayedColumns:string[] = ["packageName","title","applicationSize","ratingAverage","edit","delete"];
  AppsByDev: App[]=[];
  GamesByDev: App[]=[];
  constructor(public dialog:MatDialog, private _apps: AppsService)
  {

  }


  apps=new MatTableDataSource(this.AppsByDev);
  games=new MatTableDataSource(this.GamesByDev);

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
    console.warn("ooga booga");
    this._apps.getAppsByDev(JSON.parse(localStorage.getItem('user')!).developer.devGuid)
    .subscribe({
      next: (res)=>{this.apps.data = res.results;}
    }
    )
  }

}
