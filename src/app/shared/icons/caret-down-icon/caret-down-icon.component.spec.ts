import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretDownIconComponent } from './caret-down-icon.component';

describe('CaretDownIconComponent', () => {
  let component: CaretDownIconComponent;
  let fixture: ComponentFixture<CaretDownIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaretDownIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaretDownIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
