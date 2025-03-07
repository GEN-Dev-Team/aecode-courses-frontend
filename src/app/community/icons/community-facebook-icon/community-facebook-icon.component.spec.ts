import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityFacebookIconComponent } from './community-facebook-icon.component';

describe('CommunityFacebookIconComponent', () => {
  let component: CommunityFacebookIconComponent;
  let fixture: ComponentFixture<CommunityFacebookIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityFacebookIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityFacebookIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
