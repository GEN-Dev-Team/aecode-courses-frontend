import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformCourseListComponent } from './platform-course-list.component';

describe('PlatformCourseListComponent', () => {
  let component: PlatformCourseListComponent;
  let fixture: ComponentFixture<PlatformCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformCourseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatformCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
