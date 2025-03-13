import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretLeftIconComponent } from './caret-left-icon.component';

describe('CaretLeftIconComponent', () => {
  let component: CaretLeftIconComponent;
  let fixture: ComponentFixture<CaretLeftIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaretLeftIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaretLeftIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
