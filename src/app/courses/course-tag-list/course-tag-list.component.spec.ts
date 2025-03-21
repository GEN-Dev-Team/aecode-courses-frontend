import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTagListComponent } from './course-tag-list.component';

describe('CourseTagListComponent', () => {
  let component: CourseTagListComponent;
  let fixture: ComponentFixture<CourseTagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseTagListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
