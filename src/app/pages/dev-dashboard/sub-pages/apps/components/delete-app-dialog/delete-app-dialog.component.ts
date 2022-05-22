import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { App } from 'src/models/App/App.model';
import { AppsService } from 'src/services/apps/apps.service';

@Component({
  selector: 'app-delete-app-dialog',
  templateUrl: './delete-app-dialog.component.html',
  styleUrls: ['./delete-app-dialog.component.sass']
})
export class DeleteAppDialogComponent implements OnInit {

  category: string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public app: App, private appsService: AppsService,private snackBar: MatSnackBar,private dialogRef: MatDialogRef<DeleteAppDialogComponent>) {

  }

  ngOnInit(): void {
    this.category=this.app.applicationCategory.masterCategory.name;
  }

  deleteApp(){
    this.appsService.deleteApp(this.app.applicationGuid)
    .subscribe({
      "next":(res)=>{
        this.dialogRef.close({event:"delete",data:this.app})
      },
      "error":(res)=>{
        console.error(res)
      }
    })
  }

}
