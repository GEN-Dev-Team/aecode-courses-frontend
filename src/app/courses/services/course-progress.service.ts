import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { IProgressRW, IProgressSession } from '../interface/CourseProgress';
import { IModule } from '../interface/Module';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class ProgressSessionService {
  http: HttpClient = inject(HttpClient);

  progress_session_url = base_url + '/progressSession';
  rw_session_url = base_url + '/progressRW';
  module_url = base_url + '/module';

  createSessionProgress(progressSession: IProgressSession) {
    if (!this.isSessionCompleted(progressSession.sessionId)) {
      console.log('Session not completed yet');
      return this.http.post<IProgressSession>(
        `${this.progress_session_url}`,
        progressSession
      );
    } else {
      console.log('Session completed already');
      return this.getSessionProgressById(progressSession.sessionId);
    }
  }

  getSessionProgressById(sessionId: number) {
    return this.http.get<IProgressSession>(
      `${this.progress_session_url}/${sessionId}`
    );
  }

  createRWProgress(ProgressRW: IProgressRW) {
    return this.http.post<IProgressRW>(`${this.rw_session_url}`, ProgressRW);
  }

  getRWProgressById(rwId: number) {
    return this.http.get<IProgressRW>(`${this.rw_session_url}/${rwId}`);
  }

  getModuleById(moduleId: number) {
    return this.http.get<IModule>(`${this.module_url}/${moduleId}`);
  }

  checkRWProgress(moduleItem: IModule) {
    if (moduleItem.relatedworks !== null) {
      let workId = -1;

      const userTestProgressList = JSON.parse(
        localStorage.getItem('user') || '{}'
      ).userprogressrw;

      return userTestProgressList.some(
        (progress: IProgressRW) =>
          progress.workId === moduleItem.relatedworks.workId
      );
    }
  }

  isSessionCompleted(sessionId: number) {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');

    if (userData.userprogresssessions !== null) {
      return userData.userprogresssessions.some(
        (progress: IProgressSession) => progress.sessionId === sessionId
      );
    }
  }
}
