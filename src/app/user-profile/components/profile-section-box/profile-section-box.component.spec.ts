import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSectionBoxComponent } from './profile-section-box.component';

describe('ProfileSectionBoxComponent', () => {
  let component: ProfileSectionBoxComponent;
  let fixture: ComponentFixture<ProfileSectionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSectionBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileSectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
