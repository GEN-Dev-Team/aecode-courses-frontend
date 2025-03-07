import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityInstagramIconComponent } from './community-instagram-icon.component';

describe('CommunityInstagramIconComponent', () => {
  let component: CommunityInstagramIconComponent;
  let fixture: ComponentFixture<CommunityInstagramIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityInstagramIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityInstagramIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
