import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { defaultSession, ISession } from '../interface/Session';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { defaultModule, IModule } from '../interface/Module';
import { defaultCourse } from '../interface/Course';
import { CourseService } from './course.service';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class CourseSessionService {
  http: HttpClient = inject(HttpClient);
  url = base_url + '/session';

  courseService: CourseService = inject(CourseService);

  private moduleSelected = new BehaviorSubject<IModule>(defaultModule);
  private courseSessionSubject = new BehaviorSubject<ISession>(defaultSession);

  courseSession$ = this.courseSessionSubject.asObservable();
  moduleSelected$ = this.moduleSelected.asObservable();

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

  setModuleSelected(moduleId: number) {
    const moduleSelected = this.courseService.getModuleById(moduleId);

    moduleSelected.subscribe((module) => {
      this.moduleSelected.next(module);
    });
  }

  getModuleSelected(): IModule {
    return this.moduleSelected.getValue();
  }
}
