import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectAdsComponent } from './object-ads.component';

describe('ObjectAdsComponent', () => {
  let component: ObjectAdsComponent;
  let fixture: ComponentFixture<ObjectAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
