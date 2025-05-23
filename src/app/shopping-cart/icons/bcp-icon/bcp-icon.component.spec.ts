import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcpIconComponent } from './bcp-icon.component';

describe('BcpIconComponent', () => {
  let component: BcpIconComponent;
  let fixture: ComponentFixture<BcpIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcpIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BcpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
