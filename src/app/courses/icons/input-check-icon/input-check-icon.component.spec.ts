import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCheckIconComponent } from './input-check-icon.component';

describe('InputCheckIconComponent', () => {
  let component: InputCheckIconComponent;
  let fixture: ComponentFixture<InputCheckIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCheckIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputCheckIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
