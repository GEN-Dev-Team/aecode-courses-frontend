import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasiveCourseDetailComponent } from './masive-course-detail.component';

describe('MasiveCourseDetailComponent', () => {
  let component: MasiveCourseDetailComponent;
  let fixture: ComponentFixture<MasiveCourseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasiveCourseDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasiveCourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
