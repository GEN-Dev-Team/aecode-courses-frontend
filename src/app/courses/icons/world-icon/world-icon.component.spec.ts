import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldIconComponent } from './world-icon.component';

describe('WorldIconComponent', () => {
  let component: WorldIconComponent;
  let fixture: ComponentFixture<WorldIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
