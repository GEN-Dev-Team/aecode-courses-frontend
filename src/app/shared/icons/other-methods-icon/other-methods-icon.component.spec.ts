import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMethodsIconComponent } from './other-methods-icon.component';

describe('OtherMethodsIconComponent', () => {
  let component: OtherMethodsIconComponent;
  let fixture: ComponentFixture<OtherMethodsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherMethodsIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherMethodsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
