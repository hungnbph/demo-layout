import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarterCampaignComponent } from './marter-campaign.component';

describe('MarterCampaignComponent', () => {
  let component: MarterCampaignComponent;
  let fixture: ComponentFixture<MarterCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarterCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarterCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
