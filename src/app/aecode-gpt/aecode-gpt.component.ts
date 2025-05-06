import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { OpenaiService } from './openai.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { chatMessageComponent } from './components/message/message.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InProgressComponent } from '../in-progress/in-progress.component';
import { threadId } from 'worker_threads';
import { BrowserService } from '../core/services/browser.service';

interface IMessage {
  userMessage: string;
  botResponse: string;
}

@Component({
  selector: 'app-aecode-gpt',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    chatMessageComponent,
    UserInputComponent,
    InProgressComponent,
  ],
  templateUrl: './aecode-gpt.component.html',
  styleUrl: './aecode-gpt.component.scss',
})
export class AecodeGptComponent {
  @ViewChild('messagesEnd') private messagesEnd!: ElementRef;
  cd = inject(ChangeDetectorRef);

  messageList: IMessage[] = [];
  shouldScroll: boolean = true;
  threadId: string = '';

  openAiService = inject(OpenaiService);

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  ngOnInit(): void {
    this.openAiService.getThreadId().subscribe({
      next: (data) => {
        this.threadId = (data as any).thread_id;
      },
    });
  }

  scrollToBottom(): void {
    try {
      this.messagesEnd.nativeElement.scrollTop =
        this.messagesEnd.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error al hacer scroll:', err);
    }
  }

  sendMessageToChatBot(prompt: string) {
    const messageItem: IMessage = {
      userMessage: prompt,
      botResponse: '',
    };

    this.messageList.push(messageItem);
    this.scrollToBottom();

    this.openAiService.sendMessageToChatBot(prompt, this.threadId).subscribe({
      next: (token) => {
        messageItem.botResponse += token;
        if (token.includes('\n\n')) console.log('/');
        this.cd.detectChanges();
        this.scrollToBottom();
      },
      error: (err) => {
        if (err instanceof Event) {
          console.warn('ℹ️ EventSource closed by server.');
        } else {
          console.error('❌ Error inesperado:', err);
        }
      },
      complete: () => {
        console.log('✅ Respuesta completa');
      },
    });
  }
}
