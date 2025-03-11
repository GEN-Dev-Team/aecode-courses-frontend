import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEyeIconComponent } from './form-eye-icon.component';

describe('FormEyeIconComponent', () => {
  let component: FormEyeIconComponent;
  let fixture: ComponentFixture<FormEyeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEyeIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEyeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
