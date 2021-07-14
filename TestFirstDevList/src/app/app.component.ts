import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  sortDevs(sortBy: any) {
    console.log(sortBy);
    this.devList = this.devList.sort((a, b) => a.name > b.name ? 1 : -1);

    return this.devList;
  }
}
