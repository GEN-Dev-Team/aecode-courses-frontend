import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartStep2Component } from './shopping-cart-step-2.component';

describe('ShoppingCartStep2Component', () => {
  let component: ShoppingCartStep2Component;
  let fixture: ComponentFixture<ShoppingCartStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
