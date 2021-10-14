import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatUrlLandingPageComponent } from './creat-url-landing-page.component';

describe('CreatUrlLandingPageComponent', () => {
  let component: CreatUrlLandingPageComponent;
  let fixture: ComponentFixture<CreatUrlLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatUrlLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatUrlLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
