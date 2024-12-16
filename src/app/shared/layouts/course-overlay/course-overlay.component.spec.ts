import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOverlayComponent } from './course-overlay.component';

describe('CourseOverlayComponent', () => {
  let component: CourseOverlayComponent;
  let fixture: ComponentFixture<CourseOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
