import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  http = inject(HttpClient);

  url = environment.base + '/ask-openai';

  sendMessageToChatBot(message: string) {
    const params = new HttpParams().set('prompt', message);
    return this.http.get(this.url, { params });
  }
}
