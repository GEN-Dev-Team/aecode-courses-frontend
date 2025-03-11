import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabsLikeIconComponent } from './collabs-like-icon.component';

describe('CollabsLikeIconComponent', () => {
  let component: CollabsLikeIconComponent;
  let fixture: ComponentFixture<CollabsLikeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollabsLikeIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollabsLikeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
