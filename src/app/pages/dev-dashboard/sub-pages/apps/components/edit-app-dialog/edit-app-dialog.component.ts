import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { App } from 'src/models/App/App.model';

@Component({
  selector: 'app-edit-app-dialog',
  templateUrl: './edit-app-dialog.component.html',
  styleUrls: ['./edit-app-dialog.component.sass']
})
export class EditAppDialogComponent implements OnInit, OnDestroy {

  constructor(@Inject(MAT_DIALOG_DATA) public app: App){ }

  ngOnInit(): void {
    console.warn('beep boop')
  }
  ngOnDestroy(): void {
    console.error('boop beep')
  }
}
