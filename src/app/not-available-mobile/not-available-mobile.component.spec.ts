import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAvailableMobileComponent } from './not-available-mobile.component';

describe('NotAvailableMobileComponent', () => {
  let component: NotAvailableMobileComponent;
  let fixture: ComponentFixture<NotAvailableMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotAvailableMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotAvailableMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
