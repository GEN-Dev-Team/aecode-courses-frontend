import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MessageBoxService } from '../core/services/message-box.service';
import { HeaderService } from '../core/services/header.service';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  http = inject(HttpClient);
  messageService = inject(MessageBoxService);
  headerService: HeaderService = inject(HeaderService);

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
            'Por hoy hemos terminado. Recarga energías y vuelve en 24:00:00 horas por más consultas.',
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

          this.headerService.showLogInAccess.set(true);
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

      const remainingTime = 24 * 60 * 60 * 1000 - timePassed; // 24 horas en milisegundos

      if (remainingTime > 0) {
        const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60)); // Horas restantes
        const remainingMinutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        ); // Minutos restantes
        const remainingSeconds = Math.floor(
          (remainingTime % (1000 * 60)) / 1000
        ); // Segundos restantes

        this.messageService.showMessageBox(
          'Buen ritmo de trabajo',
          `Por hoy hemos terminado. Recarga energías y vuelve en ${remainingHours}:${remainingMinutes
            .toString()
            .padStart(2, '0')}:${remainingSeconds
            .toString()
            .padStart(2, '0')} horas por más consultas.`,
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
}
