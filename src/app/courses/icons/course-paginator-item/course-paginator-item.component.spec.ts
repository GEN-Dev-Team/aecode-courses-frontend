import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePaginatorItemComponent } from './course-paginator-item.component';

describe('CoursePaginatorItemComponent', () => {
  let component: CoursePaginatorItemComponent;
  let fixture: ComponentFixture<CoursePaginatorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursePaginatorItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursePaginatorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
