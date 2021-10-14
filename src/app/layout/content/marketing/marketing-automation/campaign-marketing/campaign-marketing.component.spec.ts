import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignMarketingComponent } from './campaign-marketing.component';

describe('CampaignMarketingComponent', () => {
  let component: CampaignMarketingComponent;
  let fixture: ComponentFixture<CampaignMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
