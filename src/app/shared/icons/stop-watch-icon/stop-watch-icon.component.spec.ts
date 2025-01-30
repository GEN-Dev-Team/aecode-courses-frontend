import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopWatchIconComponent } from './stop-watch-icon.component';

describe('StopWatchIconComponent', () => {
  let component: StopWatchIconComponent;
  let fixture: ComponentFixture<StopWatchIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StopWatchIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StopWatchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
