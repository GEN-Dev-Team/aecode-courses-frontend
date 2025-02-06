import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretDownQuestionIconComponent } from './caret-down-question-icon.component';

describe('CaretDownQuestionIconComponent', () => {
  let component: CaretDownQuestionIconComponent;
  let fixture: ComponentFixture<CaretDownQuestionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaretDownQuestionIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaretDownQuestionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
