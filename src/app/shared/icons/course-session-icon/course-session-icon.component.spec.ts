import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSessionIconComponent } from './course-session-icon.component';

describe('CourseSessionIconComponent', () => {
  let component: CourseSessionIconComponent;
  let fixture: ComponentFixture<CourseSessionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSessionIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseSessionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
