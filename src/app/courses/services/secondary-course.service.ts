import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {
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

  getAllSecondaryCourses(): Observable<ISecondaryCourse[]> {
    return this.http.get<ISecondaryCourse[]>(this.api_url);
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
}
