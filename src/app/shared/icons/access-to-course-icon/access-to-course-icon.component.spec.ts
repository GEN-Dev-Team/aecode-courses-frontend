import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessToCourseIconComponent } from './access-to-course-icon.component';

describe('AccessToCourseIconComponent', () => {
  let component: AccessToCourseIconComponent;
  let fixture: ComponentFixture<AccessToCourseIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessToCourseIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessToCourseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
