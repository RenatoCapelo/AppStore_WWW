import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { App } from 'src/models/App/App.model';
import { applicationCategory } from 'src/models/AppCategory/applicationCategory.model';
import { AppCategoriesService } from 'src/services/appCategories/app-categories.service';

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

  ngOnInit(): void {
    this._categories.getCategoriesByMaster(this.app.applicationCategory.masterCategory.id)
    .subscribe({
      next: (res)=>{
        this.categories = res
      }
    })
  }
  save(){

  }
  ngOnDestroy(): void {
  }
}
