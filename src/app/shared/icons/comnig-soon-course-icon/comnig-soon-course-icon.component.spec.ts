import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComnigSoonCourseIconComponent } from './comnig-soon-course-icon.component';

describe('ComnigSoonCourseIconComponent', () => {
  let component: ComnigSoonCourseIconComponent;
  let fixture: ComponentFixture<ComnigSoonCourseIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComnigSoonCourseIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComnigSoonCourseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
