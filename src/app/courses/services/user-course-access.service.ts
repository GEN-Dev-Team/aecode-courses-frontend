import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserCourseAccessService {
  http = inject(HttpClient);

  url = environment.base + '/userseccourse';

  getUserCourseAccess(userId: number) {
    return this.http.get(`${this.url}/${userId}`);
  }

  createUserCourseAccess(userId: number, courseId: number) {
    const data = { userId: userId, seccourseId: courseId };

    return this.http.post(`${this.url}`, data);
  }
}
