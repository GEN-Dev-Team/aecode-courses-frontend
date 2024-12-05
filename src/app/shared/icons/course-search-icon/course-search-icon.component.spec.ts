import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchIconComponent } from './course-search-icon.component';

describe('CourseSearchIconComponent', () => {
  let component: CourseSearchIconComponent;
  let fixture: ComponentFixture<CourseSearchIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSearchIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseSearchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
