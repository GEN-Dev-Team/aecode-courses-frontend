import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCartInvestmentComponent } from './shop-cart-investment.component';

describe('ShopCartInvestmentComponent', () => {
  let component: ShopCartInvestmentComponent;
  let fixture: ComponentFixture<ShopCartInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCartInvestmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopCartInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
