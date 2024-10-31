import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISession } from '../interface/Session';

@Injectable({
  providedIn: 'root',
})
export class CourseSessionService {
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

  setCourseSessionDetails(session: ISession) {
    this.courseSessionSubject.next(session);
  }
}
