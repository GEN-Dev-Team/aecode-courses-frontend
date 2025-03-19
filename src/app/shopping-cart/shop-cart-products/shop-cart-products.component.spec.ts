import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCartProductsComponent } from './shop-cart-products.component';

describe('ShopCartProductsComponent', () => {
  let component: ShopCartProductsComponent;
  let fixture: ComponentFixture<ShopCartProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCartProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopCartProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
