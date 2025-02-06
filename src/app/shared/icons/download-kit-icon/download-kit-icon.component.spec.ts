import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadKitIconComponent } from './download-kit-icon.component';

describe('DownloadKitIconComponent', () => {
  let component: DownloadKitIconComponent;
  let fixture: ComponentFixture<DownloadKitIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadKitIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadKitIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
