import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { OpenaiService } from './openai.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { chatMessageComponent } from './components/message/message.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InProgressComponent } from '../in-progress/in-progress.component';

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

  messageList: IMessage[] = [
    // {
    //   userMessage: 'Hola',
    //   botResponse: '',
    // },
  ];
  shouldScroll: boolean = true;

  openAiService = inject(OpenaiService);

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
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

    // this.openAiService.sendMessageToChatBot(prompt).subscribe({
    //   next: (token) => (messageItem.botResponse += token),
    //   error: (err) => console.error(err),
    //   complete: () => console.log('Respuesta completa', messageItem),
    // });

    this.openAiService.sendMessageToChatBot(prompt).subscribe({
      next: (res) => {
        console.log('Response in component:', res);
        const response = res as any;
        const chatBotResponse = response.respuesta;

        if (chatBotResponse) {
          this.messageList[this.messageList.length - 1].botResponse =
            chatBotResponse;
          this.shouldScroll = true;
        }
      },
      error: (err) => {
        console.error('Error al enviar el mensaje:', err);
      },
    });
  }
}
