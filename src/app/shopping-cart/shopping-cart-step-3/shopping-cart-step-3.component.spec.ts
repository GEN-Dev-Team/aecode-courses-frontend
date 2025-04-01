import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartStep3Component } from './shopping-cart-step-3.component';

describe('ShoppingCartStep3Component', () => {
  let component: ShoppingCartStep3Component;
  let fixture: ComponentFixture<ShoppingCartStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartStep3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
