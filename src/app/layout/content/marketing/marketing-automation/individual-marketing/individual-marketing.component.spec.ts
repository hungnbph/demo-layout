import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMarketingComponent } from './individual-marketing.component';

describe('IndividualMarketingComponent', () => {
  let component: IndividualMarketingComponent;
  let fixture: ComponentFixture<IndividualMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
