import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IAmazonProducts } from './interfaces/iamazon-products';
import {DATA} from './amazon-data';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'inStock'];
  dataSource: MatTableDataSource<IAmazonProducts>;
  @ViewChild(MatSort, {static: true})sort: MatSort; 

  ngOnInit(): void{
    this.dataSource = new MatTableDataSource(DATA);
    this.dataSource.sort = this.sort;
    

  }

  applyFilter(filter:any): void{
    this.dataSource.filter = filter.trim().toLowerCase(); 
  }
}
