import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFilterDropdownComponent } from './course-filter-dropdown.component';

describe('CourseFilterDropdownComponent', () => {
  let component: CourseFilterDropdownComponent;
  let fixture: ComponentFixture<CourseFilterDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseFilterDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseFilterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
