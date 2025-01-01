import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseModuleBoxComponent } from './course-module-box.component';

describe('CourseModuleBoxComponent', () => {
  let component: CourseModuleBoxComponent;
  let fixture: ComponentFixture<CourseModuleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseModuleBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseModuleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
