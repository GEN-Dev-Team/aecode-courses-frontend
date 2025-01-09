import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { IEmail } from '../interface/Email';

@Injectable({
  providedIn: 'root',
})
export class EmailSenderService {
  api_url: string = environment.base + '/email';

  http: HttpClient = inject(HttpClient);

  sendEmail(email: IEmail) {
    return this.http.post<IEmail>(`${this.api_url}/send`, email);
  }
}
