import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLandingUnitComponent } from './course-landing-unit.component';

describe('CourseLandingUnitComponent', () => {
  let component: CourseLandingUnitComponent;
  let fixture: ComponentFixture<CourseLandingUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseLandingUnitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseLandingUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
