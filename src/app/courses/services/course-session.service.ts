import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISession } from '../interface/Session';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class CourseSessionService {
  http: HttpClient = inject(HttpClient);
  url = base_url + '/session';

  private module_id = new BehaviorSubject<number>(0);

  private courseSessionSubject = new BehaviorSubject<ISession>({
    sessionId: 0,
    unitId: 0,
    title: '',
    videoUrl: '',
    description: '',
    resourceText: '',
    resourceDocument: '',
    orderNumber: 0,
    taskName: '',
    taskUrl: '',
    htmlContent: '',
    classquestions: [],
  });
  constructor() {}

  courseSession$ = this.courseSessionSubject.asObservable();
  module_id$ = this.module_id.asObservable();

  setCourseSessionDetails(session: ISession) {
    if (session.sessionId > 0) {
      this.http
        .get<ISession>(this.url + '/' + session.sessionId)
        .subscribe((response) => {
          this.courseSessionSubject.next(response);
        });
    } else {
      this.courseSessionSubject.next(session);
    }
  }

  setModuleId(id: number) {
    this.module_id.next(id);
  }
}
