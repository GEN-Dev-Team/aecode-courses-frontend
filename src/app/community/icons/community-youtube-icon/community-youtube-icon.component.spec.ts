import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityYoutubeIconComponent } from './community-youtube-icon.component';

describe('CommunityYoutubeIconComponent', () => {
  let component: CommunityYoutubeIconComponent;
  let fixture: ComponentFixture<CommunityYoutubeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityYoutubeIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityYoutubeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
