import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShamanIconComponent } from './shaman-icon.component';

describe('ShamanIconComponent', () => {
  let component: ShamanIconComponent;
  let fixture: ComponentFixture<ShamanIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShamanIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShamanIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
