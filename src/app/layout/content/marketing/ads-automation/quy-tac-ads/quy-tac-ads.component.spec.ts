import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuyTacAdsComponent } from './quy-tac-ads.component';

describe('QuyTacAdsComponent', () => {
  let component: QuyTacAdsComponent;
  let fixture: ComponentFixture<QuyTacAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuyTacAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuyTacAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
