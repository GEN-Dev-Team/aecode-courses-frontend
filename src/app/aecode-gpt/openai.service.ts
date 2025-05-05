import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  http = inject(HttpClient);

  url = environment.agent_url + '/api/chat';

  sendMessageToChatBot(message: string) {
    console.log('message', { mensaje: message });
    // const params = new HttpParams().set('prompt', message);
    return this.http.post(this.url, { mensaje: message });
  }
}
