import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSidebarItemComponent } from './profile-sidebar-item.component';

describe('ProfileSidebarItemComponent', () => {
  let component: ProfileSidebarItemComponent;
  let fixture: ComponentFixture<ProfileSidebarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSidebarItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
