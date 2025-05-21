import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  defaultCoursePurchased,
  ICoursePurchased,
  ISecondaryCourse,
  ISecondaryCourseSummary,
} from '../interface/secondary-course/Secondary-Course';
import { catchError, Observable, throwError } from 'rxjs';
import { IPaginator } from '../../core/interfaces/paginator';

@Injectable({
  providedIn: 'root',
})
export class SecondaryCourseService {
  http: HttpClient = inject(HttpClient);

  api_url = environment.base + '/secondarycourses';

  coursePurchasedData = signal<ICoursePurchased>(defaultCoursePurchased);

  getAllSecondaryCourses(): Observable<ISecondaryCourse[]> {
    return this.http.get<ISecondaryCourse[]>(this.api_url);
  }

  getMainSecondaryCourses() {
    return this.http.get<ISecondaryCourseSummary>(
      `${this.api_url}/listByType?type=mainCourse`
    );
  }

  getSecondaryCourseById(id: number): Observable<ISecondaryCourse> {
    return this.http.get<ISecondaryCourse>(`${this.api_url}/${id}`);
  }

  getSecondaryCourseByAttribute(
    attribute: string,
    value: any
  ): Observable<ISecondaryCourse> {
    return this.http.get<ISecondaryCourse>(
      `${this.api_url}/search?attribute=${attribute}&value=${value}`
    );
  }

  getSecondaryCourseByModulexProgram(
    module: string,
    program: string
  ): Observable<ISecondaryCourse> {
    return this.http
      .get<ISecondaryCourse>(
        `${this.api_url}/getByModulexProgram/${module}/${program}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getPaginatedSecCoursesList(pageNumber: number, pageSize: number) {
    return this.http.get<IPaginator<ISecondaryCourseSummary>>(
      `${this.api_url}/paginatedList?offsetCourseId=0&page=${pageNumber}&size=${pageSize}`
    );
  }

  getSecondaryCoursesByMode(
    mode: string,
    pageNumber: number,
    pageSize: number
  ) {
    return this.http.get<IPaginator<ISecondaryCourseSummary>>(
      `${this.api_url}/paginateByMode?mode=${mode}&page=${pageNumber}&size=${pageSize}`
    );
  }

  getSecondaryCoursesByDate(pageNumber: number, pageSize: number) {
    return this.http.get<IPaginator<ISecondaryCourseSummary>>(
      `${this.api_url}/paginateByDate?offsetCourseId=0&page=${pageNumber}&size=${pageSize}`
    );
  }

  getSecondaryCoursesByTags(
    tagIdsList: number[],
    pageNumber: number,
    pageSize: number
  ) {
    const tagIds = tagIdsList.join('&tagIds=');

    return this.http.get<IPaginator<ISecondaryCourseSummary>>(
      `${this.api_url}/paginateByTags?tagIds=${tagIds}&page=${pageNumber}&size=${pageSize}`
    );
  }

  getCourseListByUserId(userId: number) {
    return this.http.get<ISecondaryCourseSummary[]>(
      `${this.api_url}/mycourses/${userId}`
    );
  }

  getCourseDataByUserId(userId: number, courseId: number) {
    return this.http.get<ICoursePurchased>(
      `${this.api_url}/mycourses/${userId}/${courseId}`
    );
  }
}
