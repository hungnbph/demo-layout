import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JouneyBuilderComponent } from './jouney-builder.component';

describe('JouneyBuilderComponent', () => {
  let component: JouneyBuilderComponent;
  let fixture: ComponentFixture<JouneyBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JouneyBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JouneyBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
