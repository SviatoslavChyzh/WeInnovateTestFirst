import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  DevList = [
    {'Spider': 'Java'},
    {'Slava': 'TypeScript'},
    {'Gabor': 'TypeScript'},
    {}
  ];
}
