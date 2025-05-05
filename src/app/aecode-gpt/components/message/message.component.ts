import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class chatMessageComponent {
  @Input() message: string = '';
  @Input() isUserMessage: boolean = false;

  userProfileImg: string = '';
  userFirstLetterName: string = 'F';
}
