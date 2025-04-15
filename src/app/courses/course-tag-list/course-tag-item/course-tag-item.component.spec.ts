import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTagItemComponent } from './course-tag-item.component';

describe('CourseTagItemComponent', () => {
  let component: CourseTagItemComponent;
  let fixture: ComponentFixture<CourseTagItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseTagItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseTagItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
