import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TestFirstDevList'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TestFirstDevList');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('TestFirstDevList app is running!');
  });

  it('should return sorted devList', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.sortDevs).toBe('TestFirstDevList');
    // const _test = this.sortDevs('language');
  })

});

// describe("QuoteService", () => {let service: QuoteService;
//
//   beforeEach(() => {
//     service = new QuoteService();});
//
//   it("should create a post in an array", () => {
//     const qouteText = "This is my first post";
//     service.addNewQuote(qouteText);
//     expect(service.quoteList.length).toBeGreaterThanOrEqual(1);});
//
//   it("should remove a created post from the array of posts", () => {
//     service.addNewQuote("This is my first post");
//     service.removeQuote(0);
//     expect(service.quoteList.length).toBeLessThan(1);});});
