import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCertificatesComponent } from './program-certificates.component';

describe('ProgramCertificatesComponent', () => {
  let component: ProgramCertificatesComponent;
  let fixture: ComponentFixture<ProgramCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramCertificatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
