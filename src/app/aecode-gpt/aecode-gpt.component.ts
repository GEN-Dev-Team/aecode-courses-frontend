import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  NgZone,
  ViewChild,
} from '@angular/core';
import { OpenaiService } from './openai.service';
import { ReactiveFormsModule } from '@angular/forms';
import { chatMessageComponent } from './components/message/message.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { ManageUserDataService } from '../user-profile/services/manage-user-data.service';
import { AuthService } from '../core/services/auth.service';
import { BrowserService } from '../core/services/browser.service';

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
  cd = inject(ChangeDetectorRef);
  manageUserDataService = inject(ManageUserDataService);
  zone = inject(NgZone);
  authService = inject(AuthService);
  openAiService = inject(OpenaiService);
  browserService = inject(BrowserService);

  userData = this.manageUserDataService.userDataInfo;

  messageList: IMessage[] = [
    // {
    //   userMessage:
    //     'Hola, ¿en que puedes ayudarme?Hola, ¿en que puedes ayudarme?Hola, ¿en que puedes ayudarme?Hola, ¿en que puedes ayudarme?Hola, ¿en que puedes ayudarme?',
    //   botResponse:
    //     'Claro, aquí te detallo los módulos de algunos de los cursos ofrecidos por AECODE:1. **Curso: Desarrollo e Implementación de IA en AEC** - **Módulo 1**: Diseño de flujos de trabajo con IA, configuración del entorno y uso de librerías como Numpy, Pandas o Keras. - **Módulo 2**: Entrenamiento de modelos de machine learning, evaluación de rendimiento y despliegue. - **Módulo 3**: Aplicación de visión por computadora y desarrollo de asistentes inteligentes con OpenCV y APIs como OpenAI.2. **Curso: Automatización BIM con Revit, Dynamo y C#** - **Módulo 1**: Uso de Dynamo para tareas comunes sin escribir código. - **Módulo 2**: Integración de Python para tareas más complejas y scripts personalizados. - **Módulo 3**: Desarrollo con C#, creación de add-ins y trabajo con la API de Revit.3. **Curso: Modelamiento y Automatización BIM en Estructuras Metálicas** - **Módulo 1**: Modelado paramétrico en Revit de estructuras metálicas. - **Módulo 2**: Automatización de tareas con Dynamo. - **Módulo 3**: Generación de metrados y planos automáticamente.4. **Curso: Python para Ingeniería Civil** - **Módulo 1**: Fundamentos de Python, estructuras básicas y primeros códigos. - **Módulo 2**: Análisis de datos con Pandas, Numpy y Matplotlib. - **Módulo 3**: Automatización y desarrollo de aplicaciones con Python.5. **Curso: Estrategias de Implementación de IA en AEC** - **Módulo 1**: Comprensión del uso de IA en AEC, ejemplos y casos reales. - **Módulo 2**: Estructuración y metodología de proyectos de IA. - **Módulo 3**: Diseño de propuestas de implementación y liderazgo en IA.Cada módulo está diseñado para equiparte con habilidades prácticas y conocimientos aplicables directamente a proyectos en el sector de Arquitectura, Ingeniería y Construcción (AEC). ¿Hay algún curso en particular que te interese profundizar?',
    // },
  ];
  threadId: string = '';

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnInit(): void {
    this.openAiService.getThreadId().subscribe({
      next: (data) => {
        this.threadId = (data as any).thread_id;
      },
    });

    if (this.browserService.isBrowser()) {
      this.openAiService.initMessageLimit();

      this.openAiService.checkTimeLimit();
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

    if (this.openAiService.checkMaxMessageLimit(this.authService.hasToken())) {
      this.messageList.push(messageItem);
      this.scrollToBottom();
      this.openAiService.addMessageToLimit();

      this.openAiService.sendMessageToChatBot(prompt, this.threadId).subscribe({
        next: (token) => {
          this.zone.run(() => {
            messageItem.botResponse += token;
            this.cd.detectChanges();
            this.scrollToBottom();
          });
        },
        error: (err) => {
          if (err instanceof Event) {
            console.warn('ℹ️ EventSource closed by server.');
          } else {
            console.error('❌ Error inesperado:', err);
          }
        },
      });
    }
  }
}
