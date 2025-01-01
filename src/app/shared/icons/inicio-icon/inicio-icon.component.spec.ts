import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioIconComponent } from './inicio-icon.component';

describe('InicioIconComponent', () => {
  let component: InicioIconComponent;
  let fixture: ComponentFixture<InicioIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
