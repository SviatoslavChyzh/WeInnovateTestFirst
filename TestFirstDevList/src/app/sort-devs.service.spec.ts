import { TestBed } from '@angular/core/testing';

import { SortDevsService } from './sort-devs.service';
import { AppComponent } from './app.component';

describe('SortDevsService', () => {
  let service: SortDevsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortDevsService);

  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
  //
  // it('devList should not be empty', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //
  //   expect(service.sortDevs(app.devList).length).toBeGreaterThanOrEqual(1);
  // })
  //
  // it('should sort devList', () => {
  //   let expectedDevList = [
  //     {name: "Bug", language: "C#"},
  //     {name: "Foo", language: "C#"},
  //     {name: "Spider", language: "Java"},
  //     {name: "Mug", language: "Java"},
  //     {name: "Bar", language: "Python"},
  //     {name: "NoName", language: "Python"},
  //     {name: "Slava", language: "TypeScript"},
  //     {name: "Gabor", language: "TypeScript"}
  //   ];
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //
  //   expect(service.sortDevs(app.devList)).toEqual(expectedDevList);
  // })

  it('should devList be paired with two matching typescript developers', () => {
    let expectation: any = ['Slava', 'Gabor'];
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(service.matchDevelopers(app.listOfTSDevs)).toEqual(expectation);
  })

  it('should devList be paired with two matching Java developers', () => {
    let expectation: any = ['Mug', 'Spider'];
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(service.matchDevelopers(app.listOfJavaDevs)).toEqual(expectation);
  })

  it('should return matched developers', () => {
    let expectation: any = [
      ['Slava', 'Gabor'],
      ['Mug', 'Spider'],
    ];
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(service.matchDevelopers(app.listOfDevs)).toEqual(expectation);
  })


});
