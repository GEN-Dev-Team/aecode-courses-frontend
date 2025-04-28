import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfIconComponent } from './edit-inf-icon.component';

describe('EditInfIconComponent', () => {
  let component: EditInfIconComponent;
  let fixture: ComponentFixture<EditInfIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditInfIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditInfIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
