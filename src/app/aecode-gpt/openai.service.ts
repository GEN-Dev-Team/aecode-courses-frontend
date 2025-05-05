import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

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

  // url = environment.agent_url + '/ask-stream';

  // sendMessageToChatBot(message: string): Observable<string> {
  //   return new Observable<string>((observer) => {
  //     fetch('http://127.0.0.1:8000/ask-stream', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ message }),
  //     })
  //       .then((response) => {
  //         const reader = response.body?.getReader();
  //         const decoder = new TextDecoder();

  //         const read = async () => {
  //           while (true) {
  //             const { done, value } = await reader!.read();
  //             if (done) {
  //               observer.complete();
  //               break;
  //             }
  //             const chunk = decoder.decode(value, { stream: true });
  //             observer.next(chunk);
  //           }
  //         };

  //         read().catch((err) => observer.error(err));
  //       })
  //       .catch((err) => observer.error(err));
  //   });
  // }
}
