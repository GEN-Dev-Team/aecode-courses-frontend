import { Component, Input } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class chatMessageComponent {
  @Input() message: string = '';
  @Input() isUserMessage: boolean = false;

  userProfileImg: string = '';
  userFirstLetterName: string = 'F';
}
