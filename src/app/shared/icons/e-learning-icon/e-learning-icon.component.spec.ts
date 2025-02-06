import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningIconComponent } from './e-learning-icon.component';

describe('ELearningIconComponent', () => {
  let component: ELearningIconComponent;
  let fixture: ComponentFixture<ELearningIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ELearningIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ELearningIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
