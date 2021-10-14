import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JouneyCampaignMasterComponent } from './jouney-campaign-master.component';

describe('JouneyCampaignMasterComponent', () => {
  let component: JouneyCampaignMasterComponent;
  let fixture: ComponentFixture<JouneyCampaignMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JouneyCampaignMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JouneyCampaignMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
