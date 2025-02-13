import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePaginatorComponent } from './course-paginator.component';

describe('CoursePaginatorComponent', () => {
  let component: CoursePaginatorComponent;
  let fixture: ComponentFixture<CoursePaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursePaginatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
