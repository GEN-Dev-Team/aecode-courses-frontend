import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrMethodComponent } from './qr-method.component';

describe('QrMethodComponent', () => {
  let component: QrMethodComponent;
  let fixture: ComponentFixture<QrMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrMethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QrMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
