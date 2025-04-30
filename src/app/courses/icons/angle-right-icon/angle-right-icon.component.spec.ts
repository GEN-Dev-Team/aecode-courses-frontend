import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleRightIconComponent } from './angle-right-icon.component';

describe('AngleRightIconComponent', () => {
  let component: AngleRightIconComponent;
  let fixture: ComponentFixture<AngleRightIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngleRightIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngleRightIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
