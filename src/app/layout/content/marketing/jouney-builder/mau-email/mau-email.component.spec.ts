import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauEmailComponent } from './mau-email.component';

describe('MauEmailComponent', () => {
  let component: MauEmailComponent;
  let fixture: ComponentFixture<MauEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
