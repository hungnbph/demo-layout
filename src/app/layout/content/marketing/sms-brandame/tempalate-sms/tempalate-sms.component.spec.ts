import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempalateSmsComponent } from './tempalate-sms.component';

describe('TempalateSmsComponent', () => {
  let component: TempalateSmsComponent;
  let fixture: ComponentFixture<TempalateSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempalateSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempalateSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
