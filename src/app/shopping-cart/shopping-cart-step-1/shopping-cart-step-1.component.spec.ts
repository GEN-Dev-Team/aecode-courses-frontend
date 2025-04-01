import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartStep1Component } from './shopping-cart-step-1.component';

describe('ShoppingCartStep1Component', () => {
  let component: ShoppingCartStep1Component;
  let fixture: ComponentFixture<ShoppingCartStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
