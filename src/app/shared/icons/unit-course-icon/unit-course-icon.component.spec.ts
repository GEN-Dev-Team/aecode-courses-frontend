import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitCourseIconComponent } from './unit-course-icon.component';

describe('UnitCourseIconComponent', () => {
  let component: UnitCourseIconComponent;
  let fixture: ComponentFixture<UnitCourseIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitCourseIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnitCourseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
