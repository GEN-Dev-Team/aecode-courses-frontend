import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { ICourse } from '../interface/Course';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  api_url = base_url + '/course';

  http: HttpClient = inject(HttpClient);

  showMasiveCourseBackground = new BehaviorSubject<boolean>(false);

  showMasiveCourseBackground$ = this.showMasiveCourseBackground.asObservable();

  setShowMasiveCourseBackground(state: boolean) {
    this.showMasiveCourseBackground.next(state);
  }

  getShowMasiveCourseBackground() {
    return this.showMasiveCourseBackground.getValue();
  }

  resetAllStates() {
    this.showMasiveCourseBackground.next(false);
  }

  getCourses() {
    return this.http.get<ICourse[]>(`${this.api_url}`);
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
}
