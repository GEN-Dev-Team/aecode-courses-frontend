import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassQuestionComponent } from './class-question.component';

describe('ClassQuestionComponent', () => {
  let component: ClassQuestionComponent;
  let fixture: ComponentFixture<ClassQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
