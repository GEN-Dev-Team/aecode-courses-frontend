import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleLeftIconComponent } from './angle-left-icon.component';

describe('AngleLeftIconComponent', () => {
  let component: AngleLeftIconComponent;
  let fixture: ComponentFixture<AngleLeftIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngleLeftIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngleLeftIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
