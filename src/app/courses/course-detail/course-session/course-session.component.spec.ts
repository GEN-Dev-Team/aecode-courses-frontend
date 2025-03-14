import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSessionComponent } from './course-session.component';

describe('CourseSessionComponent', () => {
  let component: CourseSessionComponent;
  let fixture: ComponentFixture<CourseSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
