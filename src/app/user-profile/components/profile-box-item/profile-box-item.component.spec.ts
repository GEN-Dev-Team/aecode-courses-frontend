import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBoxItemComponent } from './profile-box-item.component';

describe('ProfileBoxItemComponent', () => {
  let component: ProfileBoxItemComponent;
  let fixture: ComponentFixture<ProfileBoxItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBoxItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileBoxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
