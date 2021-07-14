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
    {name: 'Spider', language: 'Java', skill: 'J'},
    {name: 'Slava', language: 'TypeScript', skill: 'S'},
    {name: 'Gabor', language: 'TypeScript', skill: 'J'},
    {name: 'Senior', language: 'TypeScript', skill: 'S'},
    {name: 'Junior', language: 'TypeScript', skill: 'J'},
    {name: 'Bug', language: 'C#', skill: 'S'},
    {name: 'Mug', language: 'Java', skill: 'S'},
    {name: 'Foo', language: 'C#', skill: 'J'},
    {name: 'Bar', language: 'Python', skill: 'J'},
    {name: 'NoName', language: 'Python', skill: 'S'}
  ];

  listOfTSSkilledDevs = [
    {name: 'Slava', language: 'TypeScript', skill: 'S'},
    {name: 'Gabor', language: 'TypeScript', skill: 'J'},
    {name: 'Senior', language: 'TypeScript', skill: 'S'},
    {name: 'Junior', language: 'TypeScript', skill: 'J'},
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
