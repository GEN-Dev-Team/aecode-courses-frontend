import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretUpIconComponent } from './caret-up-icon.component';

describe('CaretUpIconComponent', () => {
  let component: CaretUpIconComponent;
  let fixture: ComponentFixture<CaretUpIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaretUpIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaretUpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
