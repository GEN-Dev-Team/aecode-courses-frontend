import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncCourseIconComponent } from './sync-course-icon.component';

describe('SyncCourseIconComponent', () => {
  let component: SyncCourseIconComponent;
  let fixture: ComponentFixture<SyncCourseIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyncCourseIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SyncCourseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
