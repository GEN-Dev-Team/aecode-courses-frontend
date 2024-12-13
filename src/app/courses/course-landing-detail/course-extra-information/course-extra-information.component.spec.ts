import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseExtraInformationComponent } from './course-extra-information.component';

describe('CourseExtraInformationComponent', () => {
  let component: CourseExtraInformationComponent;
  let fixture: ComponentFixture<CourseExtraInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseExtraInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseExtraInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
