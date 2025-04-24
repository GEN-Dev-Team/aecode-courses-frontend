import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ISessionTest } from '../../interface/Test';
import { BehaviorSubject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class SessionTestService {
  url_api = base_url + '/sessiontest';

  http: HttpClient = inject(HttpClient);

  getSessionTest(id: number) {
    return this.http.get<ISessionTest>(`${this.url_api}/${id}`);
  }
}
