import { Component, OnInit } from '@angular/core';
import { PagingConfig } from './models/ paging-config.model';
import { ICodeValue } from './models/codevalue';
import { CodeValueService } from './services/codeValue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, PagingConfig {

  constructor(private codeValueService: CodeValueService) {
    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }
  title = 'angular web api';
  codeValues: ICodeValue[];

  currentPage: number = 1;
  itemsPerPage: number = 2;
  totalItems: number = 0;

  tableSize: number[] = [1, 2, 3, 4, 5, 10, 15, 20];

  ngOnInit(): void {
    this.fetch();
  }

  pagingConfig: PagingConfig = {} as PagingConfig;



  fetch(): void {
    this.codeValueService.getAll().subscribe(
      (response) => {
        this.codeValues = response;
        this.pagingConfig.totalItems = response.length;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onPageChange(event: any) {
    this.pagingConfig.currentPage = event;
  }
  onTableSizeChange(event: any): void {
    console.log(event.target.value)
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
  }

}
