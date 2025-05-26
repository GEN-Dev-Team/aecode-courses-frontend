import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCartNavigatorComponent } from './shop-cart-navigator.component';

describe('ShopCartNavigatorComponent', () => {
  let component: ShopCartNavigatorComponent;
  let fixture: ComponentFixture<ShopCartNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCartNavigatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopCartNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
