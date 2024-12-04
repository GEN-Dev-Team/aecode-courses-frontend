import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretDownIconLightComponent } from './caret-down-icon-light.component';

describe('CaretDownIconLightComponent', () => {
  let component: CaretDownIconLightComponent;
  let fixture: ComponentFixture<CaretDownIconLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaretDownIconLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaretDownIconLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
