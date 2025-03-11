import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCommunityIconComponent } from './home-community-icon.component';

describe('HomeCommunityIconComponent', () => {
  let component: HomeCommunityIconComponent;
  let fixture: ComponentFixture<HomeCommunityIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCommunityIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCommunityIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
