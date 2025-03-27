import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartInputSelectedIconComponent } from './cart-input-selected-icon.component';

describe('CartInputSelectedIconComponent', () => {
  let component: CartInputSelectedIconComponent;
  let fixture: ComponentFixture<CartInputSelectedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartInputSelectedIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartInputSelectedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
