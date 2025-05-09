import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMainComponent } from './course-main.component';

describe('CourseMainComponent', () => {
  let component: CourseMainComponent;
  let fixture: ComponentFixture<CourseMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
