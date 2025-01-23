import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncCourseIconComponent } from './async-course-icon.component';

describe('AsyncCourseIconComponent', () => {
  let component: AsyncCourseIconComponent;
  let fixture: ComponentFixture<AsyncCourseIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncCourseIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsyncCourseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
