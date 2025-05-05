import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IaIconComponent } from './ia-icon/ia-icon.component';
import { SendChatIconComponent } from './send-chat-icon/send-chat-icon.component';
import { GptIconComponent } from './gpt-icon/gpt-icon.component';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IaIconComponent,
    SendChatIconComponent,
    GptIconComponent,
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  @Output() userInputEvent = new EventEmitter<string>();

  userInput = new FormControl('');

  sendUserMessage() {
    this.userInputEvent.emit(this.userInput.value!);
    this.userInput.reset();
  }
}
