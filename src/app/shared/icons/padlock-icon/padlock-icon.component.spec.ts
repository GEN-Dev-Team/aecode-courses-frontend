import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadlockIconComponent } from './padlock-icon.component';

describe('PadlockIconComponent', () => {
  let component: PadlockIconComponent;
  let fixture: ComponentFixture<PadlockIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadlockIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PadlockIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
