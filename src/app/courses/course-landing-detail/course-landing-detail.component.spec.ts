import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLandingDetailComponent } from './course-landing-detail.component';

describe('CourseLandingDetailComponent', () => {
  let component: CourseLandingDetailComponent;
  let fixture: ComponentFixture<CourseLandingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseLandingDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseLandingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
