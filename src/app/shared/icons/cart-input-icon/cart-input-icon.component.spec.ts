import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartInputIconComponent } from './cart-input-icon.component';

describe('CartInputIconComponent', () => {
  let component: CartInputIconComponent;
  let fixture: ComponentFixture<CartInputIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartInputIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartInputIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
