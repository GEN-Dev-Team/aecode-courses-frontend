import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { IProgressSession } from '../interface/ProgressSession';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class ProgressSessionService {
  http: HttpClient = inject(HttpClient);

  api_url = base_url + '/progressSession';

  post(progressSession: IProgressSession) {
    return this.http.post<IProgressSession>(`${this.api_url}`, progressSession);
  }

  getBySessionId(sessionId: number) {
    return this.http.get<IProgressSession>(`${this.api_url}/${sessionId}`);
  }
}
