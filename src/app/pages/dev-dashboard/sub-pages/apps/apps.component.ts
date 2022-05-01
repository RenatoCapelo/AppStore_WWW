import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { App } from 'src/models/App/App.model';


@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.sass']
})

export class AppsComponent implements OnInit {

  ngOnInit(): void {
  }
}
