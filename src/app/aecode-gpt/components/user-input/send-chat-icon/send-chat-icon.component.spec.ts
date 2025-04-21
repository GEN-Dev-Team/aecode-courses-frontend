import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendChatIconComponent } from './send-chat-icon.component';

describe('SendChatIconComponent', () => {
  let component: SendChatIconComponent;
  let fixture: ComponentFixture<SendChatIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendChatIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendChatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
