import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSchedulesComponent } from './program-schedules.component';

describe('ProgramSchedulesComponent', () => {
  let component: ProgramSchedulesComponent;
  let fixture: ComponentFixture<ProgramSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramSchedulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
