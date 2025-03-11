import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedIconComponent } from './blocked-icon.component';

describe('BlockedIconComponent', () => {
  let component: BlockedIconComponent;
  let fixture: ComponentFixture<BlockedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockedIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
