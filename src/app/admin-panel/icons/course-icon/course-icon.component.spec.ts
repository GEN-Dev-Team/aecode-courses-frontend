import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseIconComponent } from './course-icon.component';

describe('CourseIconComponent', () => {
  let component: CourseIconComponent;
  let fixture: ComponentFixture<CourseIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
