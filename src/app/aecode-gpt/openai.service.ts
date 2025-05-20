import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MessageBoxService } from '../core/services/message-box.service';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  http = inject(HttpClient);
  messageService = inject(MessageBoxService);

  url = environment.agent_url;

  sendMessageToChatBot(message: string, threadId: string): Observable<string> {
    return new Observable<string>((observer) => {
      const eventSource = new EventSource(
        `${this.url}/message?message=${encodeURIComponent(
          message
        )}&thread_id=${encodeURIComponent(threadId)}`
      );

      eventSource.onmessage = (event) => {
        // SSE entrega el contenido como string
        const content = event.data;
        if (content === '[[END]]') {
          eventSource.close();
          observer.complete();
        } else {
          observer.next(content);
        }
      };

      eventSource.onerror = (error) => {
        console.error('❌ Error en EventSource:', error);
        observer.error(error);
        eventSource.close();
      };

      return () => {
        eventSource.close();
      };
    });
  }

  getThreadId() {
    return this.http.get(`${this.url}/thread`);
  }

  initMessageLimit() {
    const messageLimit = localStorage.getItem('messageLimit');

    if (messageLimit) return;

    localStorage.setItem('messageLimit', '0');
  }

  addMessageToLimit() {
    const messageLimit = localStorage.getItem('messageLimit');
    if (messageLimit) {
      localStorage.setItem('messageLimit', String(Number(messageLimit) + 1));
    }
  }

  checkMaxMessageLimit(isUserLogged: boolean): boolean {
    const messageLimit = localStorage.getItem('messageLimit');
    const lastMessageTime = localStorage.getItem('lastMessageTime');

    if (lastMessageTime) {
      this.checkTimeLimit();
    }

    if (messageLimit) {
      if (isUserLogged) {
        if (Number(messageLimit) < 8) return true;
        else if (!lastMessageTime) {
          this.initLastMessageTime();

          this.messageService.showMessageBox(
            'Buen ritmo de trabajo',
            'Por hoy hemos terminado. Recarga energías y vuelve mañana por más consultas.',
            false
          );
          return false;
        }
      } else {
        if (Number(messageLimit) < 2) return true;
        else {
          this.messageService.showMessageBox(
            '¿Te gustó lo que viste?',
            'Regístrate gratis y desbloquea más respuestas de Aecodito.',
            false
          );
          return false;
        }
      }
    }

    return false;
  }

  initLastMessageTime() {
    const currentTime = new Date().getTime();

    localStorage.setItem('lastMessageTime', currentTime.toString());
  }

  checkTimeLimit() {
    const lastMessageTime = localStorage.getItem('lastMessageTime');
    const currentTime = new Date().getTime();

    if (lastMessageTime) {
      // Tiempo transcurrido desde el último mensaje en milisegundos
      const timePassed = currentTime - Number(lastMessageTime);

      // Calcular el tiempo restante en milisegundos para 3 minutos
      const remainingTime = 5 * 60 * 1000 - timePassed; // 3 minutos en milisegundos

      // Si el tiempo restante es mayor a 0, calcular las horas y los minutos
      if (remainingTime > 0) {
        const remainingMinutes = Math.floor(remainingTime / (1000 * 60)); // Minutos restantes
        const remainingSeconds = Math.floor(
          (remainingTime % (1000 * 60)) / 1000
        ); // Segundos restantes

        this.messageService.showMessageBox(
          'Buen ritmo de trabajo',
          `Por favor espera ${remainingMinutes} minuto(s) y ${remainingSeconds} segundo(s) antes de enviar otro mensaje.`,
          false
        );
        return false;
      } else {
        localStorage.setItem('messageLimit', '0');
        localStorage.removeItem('lastMessageTime');
        return true;
      }
    }

    return true;
  }

  // checkTimeLimit() {
  //   const lastMessageTime = localStorage.getItem('lastMessageTime');

  //   const currentTime = new Date().getTime();

  //   if (lastMessageTime) {
  //     // Tiempo transcurrido desde el último mensaje en milisegundos
  //     const timePassed = currentTime - Number(lastMessageTime);

  //     // Calcular el tiempo restante en horas y minutos
  //     const remainingTime = 24 * 60 * 60 * 1000 - timePassed; // 24 horas en milisegundos

  //     // Si el tiempo restante es mayor a 0, calcular las horas y los minutos
  //     if (remainingTime > 0) {
  //       const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60)); // Horas restantes
  //       const remainingMinutes = Math.floor(
  //         (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  //       ); // Minutos restantes

  //       this.messageService.showMessageBox(
  //         'Buen ritmo de trabajo',
  //         `Por hoy hemos terminado. Recarga energías y vuelve en ${remainingHours} hora(s) y ${remainingMinutes} minuto(s) para más consultas.`,
  //         false
  //       );
  //       return false;
  //     } else {
  //       // Si ya pasaron las 24 horas, permitir el mensaje
  //       localStorage.setItem('messageLimit', '0');
  //       localStorage.setItem('lastMessageTime', '0');
  //       return true;
  //     }
  //   }

  //   return true; // Si no hay tiempo registrado, no hay límite de mensajes
  // }
}
