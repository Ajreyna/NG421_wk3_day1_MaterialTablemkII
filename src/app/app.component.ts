import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IAmazonProducts } from './interfaces/iamazon-products';
import {DATA} from './amazon-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'inStock'];
  dataSource: MatTableDataSource<IAmazonProducts>;

  ngOnInit(): void{
    this.dataSource = new MatTableDataSource(DATA);

  }
}
