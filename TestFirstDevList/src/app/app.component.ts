import { Component, OnInit } from '@angular/core';
import { SortDevsService } from './sort-devs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TestFirstDevList';

  devList = [
    {name: 'Spider', language: 'Java'},
    {name: 'Slava', language: 'TypeScript'},
    {name: 'Gabor', language: 'TypeScript'},
    {name: 'Bug', language: 'C#'},
    {name: 'Mug', language: 'Java'},
    {name: 'Foo', language: 'C#'},
    {name: 'Bar', language: 'Python'},
    {name: 'NoName', language: 'Python'}
  ];

  listOfTSDevs = [
    {name: 'Slava', language: 'TypeScript'},
    {name: 'Gabor', language: 'TypeScript'},
  ]

  listOfJavaDevs = [
    {name: 'Mug', language: 'Java'},
    {name: 'Spider', language: 'Java'},
  ]

  listOfDevs = [
    {name: 'Slava', language: 'TypeScript'},
    {name: 'Gabor', language: 'TypeScript'},
    {name: 'Mug', language: 'Java'},
    {name: 'Spider', language: 'Java'},
  ]

  constructor(
    public sortDevsService: SortDevsService
  ) { }

  ngOnInit() {
    this.sortDevsService.matchDevelopers(this.devList);
  }

  sortDevs() {
    this.devList = this.sortDevsService.sortDevs(this.devList);
  }


}
