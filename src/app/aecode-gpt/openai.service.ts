import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  http = inject(HttpClient);

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

  addMessageToLimit(isUserLogged: boolean) {
    const messageLimit = localStorage.getItem('messageLimit');
    if (messageLimit) {
      if (this.checkMaxMessageLimit(isUserLogged)) {
        localStorage.setItem('messageLimit', String(Number(messageLimit) + 1));
      } else {
        console.log('Limite de mensajes alcanzado');
      }
    }
  }

  checkMaxMessageLimit(isUserLogged: boolean): boolean {
    const messageLimit = localStorage.getItem('messageLimit');

    if (messageLimit) {
      if (isUserLogged) {
        return Number(messageLimit) < 10;
      } else {
        return Number(messageLimit) < 2;
      }
    }

    return false;
  }
}
