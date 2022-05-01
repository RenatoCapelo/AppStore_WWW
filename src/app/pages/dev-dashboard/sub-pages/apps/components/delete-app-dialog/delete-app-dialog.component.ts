import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { App } from 'src/models/App/App.model';

@Component({
  selector: 'app-delete-app-dialog',
  templateUrl: './delete-app-dialog.component.html',
  styleUrls: ['./delete-app-dialog.component.sass']
})
export class DeleteAppDialogComponent implements OnInit {

  category: string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public app: App) {

  }

  ngOnInit(): void {
    this.category=this.app.applicationCategory.masterCategory.name;
  }

}
