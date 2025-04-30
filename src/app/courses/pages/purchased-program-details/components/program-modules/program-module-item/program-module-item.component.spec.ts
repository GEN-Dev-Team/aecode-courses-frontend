import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramModuleItemComponent } from './program-module-item.component';

describe('ProgramModuleItemComponent', () => {
  let component: ProgramModuleItemComponent;
  let fixture: ComponentFixture<ProgramModuleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramModuleItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramModuleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
