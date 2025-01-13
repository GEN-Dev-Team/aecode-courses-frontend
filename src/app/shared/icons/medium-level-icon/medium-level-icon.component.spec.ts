import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumLevelIconComponent } from './medium-level-icon.component';

describe('MediumLevelIconComponent', () => {
  let component: MediumLevelIconComponent;
  let fixture: ComponentFixture<MediumLevelIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumLevelIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediumLevelIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
