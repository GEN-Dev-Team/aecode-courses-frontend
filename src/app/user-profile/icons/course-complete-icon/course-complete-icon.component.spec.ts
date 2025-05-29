import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCompleteIconComponent } from './course-complete-icon.component';

describe('CourseCompleteIconComponent', () => {
  let component: CourseCompleteIconComponent;
  let fixture: ComponentFixture<CourseCompleteIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCompleteIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseCompleteIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
