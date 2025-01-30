import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecCourseWsspIconComponent } from './sec-course-wssp-icon.component';

describe('SecCourseWsspIconComponent', () => {
  let component: SecCourseWsspIconComponent;
  let fixture: ComponentFixture<SecCourseWsspIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecCourseWsspIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecCourseWsspIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
