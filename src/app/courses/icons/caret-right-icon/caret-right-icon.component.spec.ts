import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretRightIconComponent } from './caret-right-icon.component';

describe('CaretRightIconComponent', () => {
  let component: CaretRightIconComponent;
  let fixture: ComponentFixture<CaretRightIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaretRightIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaretRightIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
