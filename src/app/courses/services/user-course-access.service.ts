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

  createUserCourseAccess(userId: number, courseIds: number[]) {
    const data = { userId: userId, seccourseIds: courseIds };

    return this.http.post(`${this.url}/purchase`, data);
  }
}
