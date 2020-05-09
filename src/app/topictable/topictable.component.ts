import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface Topic {
  name: string;
  subtopics: number;
  estimate: number;
  level: string;
}

const ELEMENT_DATA: Topic[] = [
  {subtopics: 20, name: 'Java', estimate: 32, level: 'Beginner'},
  {subtopics: 18, name: 'JavaScript', estimate: 28, level: 'Intermediate'},
  {subtopics: 14, name: 'Python', estimate: 23, level: 'Intermediate'},
  {subtopics: 9, name: 'Ruby', estimate: 12, level: 'Beginner'},
  {subtopics: 10, name: 'ShellScript', estimate: 12, level: 'Advanced'},
  {subtopics: 12, name: 'TypeScript', estimate: 14, level: 'Intermediate'},
  {subtopics: 13, name: 'Php', estimate: 14, level: 'Beginner'},
  {subtopics: 15, name: 'C#', estimate: 20, level: 'Intermediate'},
  {subtopics: 11, name: 'C++', estimate: 14, level: 'Beginner'},
  {subtopics: 9, name: 'Groovy', estimate: 12, level: 'Advanced'},
];

@Component({
  selector: 'app-topictable',
  templateUrl: './topictable.component.html',
  styleUrls: ['./topictable.component.scss']
})

export class TopictableComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'subtopics', 'estimate', 'level'];
  dataSource;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sorter: MatSort;

  constructor() { 

  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.dataSource = new MatTableDataSource<Topic>(ELEMENT_DATA);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sorter;
    },3000)
  
  }

}
