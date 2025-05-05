import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ICourse } from '../interface/Course';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IModule } from '../interface/Module';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  api_url = base_url + '/course';
  api_url_module = base_url + '/module';

  http: HttpClient = inject(HttpClient);

  getCourses() {
    return this.http
      .get<ICourse[]>(`${this.api_url}`)
      .pipe(
        map((courses) => courses.sort((a, b) => a.courseOrder - b.courseOrder))
      );
  }

  getCourse(id: number) {
    return this.http.get<ICourse>(`${this.api_url}/${id}`);
  }

  createCourse(course: ICourse) {
    return this.http.post<ICourse>(`${this.api_url}`, course);
  }

  updateCourse(course: ICourse) {
    return this.http.put<ICourse>(`${this.api_url}/${course.courseId}`, course);
  }

  deleteCourse(id: number) {
    return this.http.delete<ICourse>(`${this.api_url}/${id}`);
  }

  getModuleById(moduleId: number): Observable<IModule> {
    return this.http.get<IModule>(`${this.api_url_module}/${moduleId}`);
  }
}
