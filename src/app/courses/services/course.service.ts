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

  showAsyncCourseDetails = new BehaviorSubject<boolean>(false);
  showMasiveCourseDetails = new BehaviorSubject<boolean>(false);
  showMasiveCourseBackground = new BehaviorSubject<boolean>(false);
  showMasiveCourseModule = new BehaviorSubject<boolean>(false);

  showAsyncCourseDetails$ = this.showAsyncCourseDetails.asObservable();
  showMasiveCourseDetails$ = this.showMasiveCourseDetails.asObservable();
  showMasiveCourseBackground$ = this.showMasiveCourseBackground.asObservable();
  showMasiveCourseModule$ = this.showMasiveCourseModule.asObservable();

  setShowAsyncCourseDetails(state: boolean) {
    this.showAsyncCourseDetails.next(state);
  }

  getShowAsyncCourseDetails() {
    return this.showAsyncCourseDetails.getValue();
  }

  setShowMasiveCourseDetails(state: boolean) {
    this.showMasiveCourseDetails.next(state);
  }

  getShowMasiveCourseDetails() {
    return this.showMasiveCourseDetails.getValue();
  }

  setShowMasiveCourseBackground(state: boolean) {
    this.showMasiveCourseBackground.next(state);
  }

  getShowMasiveCourseBackground() {
    return this.showMasiveCourseBackground.getValue();
  }

  setShowMasiveCourseModule(state: boolean) {
    this.showMasiveCourseModule.next(state);
  }

  getShowMasiveCourseModule() {
    return this.showMasiveCourseModule.getValue();
  }

  resetAllStates() {
    this.showAsyncCourseDetails.next(false);
    this.showMasiveCourseDetails.next(false);
    this.showMasiveCourseBackground.next(false);
    this.showMasiveCourseModule.next(false);
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
