import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { ICourse } from '../interface/Course';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  api_url = base_url + '/course';

  constructor(private http: HttpClient) {}

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
