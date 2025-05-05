import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AecoditoMobileComponent } from './aecodito-mobile.component';

describe('AecoditoMobileComponent', () => {
  let component: AecoditoMobileComponent;
  let fixture: ComponentFixture<AecoditoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AecoditoMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AecoditoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
