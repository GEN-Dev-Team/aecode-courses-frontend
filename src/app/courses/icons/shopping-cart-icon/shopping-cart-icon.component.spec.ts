import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartIconComponent } from './shopping-cart-icon.component';

describe('ShoppingCartIconComponent', () => {
  let component: ShoppingCartIconComponent;
  let fixture: ComponentFixture<ShoppingCartIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
