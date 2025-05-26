import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCartWhatsappButtonComponent } from './shop-cart-whatsapp-button.component';

describe('ShopCartWhatsappButtonComponent', () => {
  let component: ShopCartWhatsappButtonComponent;
  let fixture: ComponentFixture<ShopCartWhatsappButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCartWhatsappButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopCartWhatsappButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
