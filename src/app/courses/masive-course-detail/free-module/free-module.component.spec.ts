import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeModuleComponent } from './free-module.component';

describe('FreeModuleComponent', () => {
  let component: FreeModuleComponent;
  let fixture: ComponentFixture<FreeModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
