import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLevelIconComponent } from './basic-level-icon.component';

describe('BasicLevelIconComponent', () => {
  let component: BasicLevelIconComponent;
  let fixture: ComponentFixture<BasicLevelIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicLevelIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicLevelIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
