import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevIconComponent } from './prev-icon.component';

describe('PrevIconComponent', () => {
  let component: PrevIconComponent;
  let fixture: ComponentFixture<PrevIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrevIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
