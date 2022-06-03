import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { App } from 'src/models/App/App.model';
import { applicationCategory } from 'src/models/AppCategory/applicationCategory.model';
import { AppCategoriesService } from 'src/services/appCategories/app-categories.service';
import { AppsService } from 'src/services/apps/apps.service';

@Component({
  selector: 'app-edit-app-dialog',
  templateUrl: './edit-app-dialog.component.html',
  styleUrls: ['./edit-app-dialog.component.sass']
})
export class EditAppDialogComponent implements OnInit, OnDestroy {
  detailsEdit
  categories: applicationCategory[] = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public app: App,
    fb: FormBuilder,
    private _categories:AppCategoriesService,
    private _apps:AppsService,
    private dialogRef: MatDialogRef<EditAppDialogComponent>
    ){
    this.detailsEdit = fb.group(
      {
        title: [app.title,[]],
        description: [app.description,[]],
        idAppCategory: [null,[]]
      }
    );
   }

    get title(){
      return this.detailsEdit.get("title")?.value;
    }
    get description(){
      return this.detailsEdit.get("description")?.value
    }
    get idAppCategory(){
      return this.detailsEdit.get("idAppCategory")?.value;
    }

  ngOnInit(): void {
    this._categories.getCategoriesByMaster(this.app.applicationCategory.masterCategory.id)
    .subscribe({
      next: (res)=>{
        this.categories = res
      }
    })
  }
  save(){
    this._apps.updateApp(this.app.applicationGuid,this.title,this.description,this.idAppCategory).subscribe({
      next: (res)=>{
        this.dialogRef.close({event:"edit",data:null});
      },
      error: (res)=>{
        this.dialogRef.close({event:"error",data:null});
      }
    })
  }
  ngOnDestroy(): void {
  }
}
