import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityLinkedinIconComponent } from './community-linkedin-icon.component';

describe('CommunityLinkedinIconComponent', () => {
  let component: CommunityLinkedinIconComponent;
  let fixture: ComponentFixture<CommunityLinkedinIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityLinkedinIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityLinkedinIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
