import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChienDichFbAdsComponent } from './chien-dich-fb-ads.component';

describe('ChienDichFbAdsComponent', () => {
  let component: ChienDichFbAdsComponent;
  let fixture: ComponentFixture<ChienDichFbAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChienDichFbAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChienDichFbAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
