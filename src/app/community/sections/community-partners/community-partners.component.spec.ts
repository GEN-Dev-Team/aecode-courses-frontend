import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPartnersComponent } from './community-partners.component';

describe('CommunityPartnersComponent', () => {
  let component: CommunityPartnersComponent;
  let fixture: ComponentFixture<CommunityPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityPartnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
