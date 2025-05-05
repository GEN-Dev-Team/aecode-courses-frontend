import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramExtraInfoComponent } from './program-extra-info.component';

describe('ProgramExtraInfoComponent', () => {
  let component: ProgramExtraInfoComponent;
  let fixture: ComponentFixture<ProgramExtraInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramExtraInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
