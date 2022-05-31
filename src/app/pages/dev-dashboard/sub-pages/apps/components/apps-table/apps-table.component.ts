import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { App } from 'src/models/App/App.model';
import { UrlsService } from 'src/services/urls/urls.service';

@Component({
  selector: 'app-apps-table',
  templateUrl: './apps-table.component.html',
  styleUrls: ['./apps-table.component.sass']
})
export class AppsTableComponent implements OnInit, AfterViewInit {

  @Input('dataSource')
  ds!: MatTableDataSource<App>;

  @Input('DisplayedColumns')
  dc!: string[];

  @Output('onAppEditClick') onAppEditClickEvent = new EventEmitter<App>();
  @Output('onAppDeleteClick') onAppDeleteClickEvent = new EventEmitter<App>();


  constructor(public url: UrlsService) { }
  ngAfterViewInit(): void {
  }

  edit(app:App){
    this.onAppEditClickEvent.emit(app);
  }

  delete(app:App){
    this.onAppDeleteClickEvent.emit(app);
  }

  ngOnInit(): void {
  }
  round(num:number)
  {
    return Math.round(num);
  }

}
