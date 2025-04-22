import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AecodeGptComponent } from './aecode-gpt.component';

describe('AecodeGptComponent', () => {
  let component: AecodeGptComponent;
  let fixture: ComponentFixture<AecodeGptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AecodeGptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AecodeGptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
