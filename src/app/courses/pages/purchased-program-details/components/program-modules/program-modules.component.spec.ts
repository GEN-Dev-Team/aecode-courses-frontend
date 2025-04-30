import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramModulesComponent } from './program-modules.component';

describe('ProgramModulesComponent', () => {
  let component: ProgramModulesComponent;
  let fixture: ComponentFixture<ProgramModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
