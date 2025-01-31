import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AecodeIconComponent } from './aecode-icon.component';

describe('AecodeIconComponent', () => {
  let component: AecodeIconComponent;
  let fixture: ComponentFixture<AecodeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AecodeIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AecodeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
