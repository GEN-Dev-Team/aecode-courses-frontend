import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { OpenaiService } from './openai.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { chatMessageComponent } from './components/message/message.component';
import { UserInputComponent } from './components/user-input/user-input.component';

interface IMessage {
  userMessage: string;
  botResponse: string;
}

@Component({
  selector: 'app-aecode-gpt',
  standalone: true,
  imports: [ReactiveFormsModule, chatMessageComponent, UserInputComponent],
  templateUrl: './aecode-gpt.component.html',
  styleUrl: './aecode-gpt.component.scss',
})
export class AecodeGptComponent {
  @ViewChild('messagesEnd') private messagesEnd!: ElementRef;

  messageList: IMessage[] = [
    {
      userMessage: 'Hola aecodito',
      botResponse: '¡Hola! ¿Cómo puedo ayudarte hoy?',
    },
    {
      userMessage: 'Que modelo de OpenAi eres?',
      botResponse:
        'Soy GPT-3, la tercera versión del modelo de lenguaje generativo preentrenado de OpenAI.',
    },
    {
      userMessage: 'Cuanto tiempo tardas en responder?',
      botResponse:
        'Como un asistente de inteligencia artificial, mis respuestas son casi instantáneas.',
    },
    {
      userMessage: 'No me mientes?',
      botResponse:
        'Como una inteligencia artificial, no tengo la capacidad de mentir o decir la verdad porque no tengo conciencia ni sentimientos. Solo proporciono información basada en datos previamente programados.',
    },
    {
      userMessage: 'Hola aecodito',
      botResponse: '¡Hola! ¿Cómo puedo ayudarte hoy?',
    },
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

  callToOpenAI(prompt: string) {
    console.log('Prompt:', prompt);

    this.openAiService.sendMessageToChatBot(prompt).subscribe({
      next: (res) => {
        const response = res as any;
        const chatBotResponse = response.choices[0].message.content;

        const messageItem: IMessage = {
          userMessage: prompt,
          botResponse: chatBotResponse,
        };

        this.messageList.push(messageItem);
        this.shouldScroll = true;
      },
      error: (err) => {
        console.error('Error al enviar el mensaje:', err);
      },
    });
  }
}
