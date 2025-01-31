import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWsspIconComponent } from './home-wssp-icon.component';

describe('HomeWsspIconComponent', () => {
  let component: HomeWsspIconComponent;
  let fixture: ComponentFixture<HomeWsspIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWsspIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeWsspIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
