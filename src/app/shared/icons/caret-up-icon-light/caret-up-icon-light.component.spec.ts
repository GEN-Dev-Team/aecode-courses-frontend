import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretUpIconLightComponent } from './caret-up-icon-light.component';

describe('CaretUpIconLightComponent', () => {
  let component: CaretUpIconLightComponent;
  let fixture: ComponentFixture<CaretUpIconLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaretUpIconLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaretUpIconLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
