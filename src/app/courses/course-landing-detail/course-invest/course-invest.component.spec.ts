import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInvestComponent } from './course-invest.component';

describe('CourseInvestComponent', () => {
  let component: CourseInvestComponent;
  let fixture: ComponentFixture<CourseInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseInvestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
