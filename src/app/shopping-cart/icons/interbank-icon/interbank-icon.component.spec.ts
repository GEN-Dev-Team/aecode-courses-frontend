import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterbankIconComponent } from './interbank-icon.component';

describe('InterbankIconComponent', () => {
  let component: InterbankIconComponent;
  let fixture: ComponentFixture<InterbankIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterbankIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterbankIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
