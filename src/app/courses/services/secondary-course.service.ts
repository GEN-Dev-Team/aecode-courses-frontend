import { inject, Injectable } from '@angular/core';
<<<<<<< HEAD
import { environment } from '../../../environments/environment';
=======
import { environment } from '../../../environment/environment';
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
import { HttpClient } from '@angular/common/http';
import {
  defaultSecondaryCourse,
  ISecondaryCourse,
  ISecondaryCourseSummary,
} from '../interface/secondary-course/Secondary-Course';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { off } from 'process';
import { IPaginator } from '../../core/interfaces/paginator';

@Injectable({
  providedIn: 'root',
})
export class SecondaryCourseService {
  http: HttpClient = inject(HttpClient);

  api_url = environment.base + '/secondarycourses';

  secondaryCourseData = new BehaviorSubject<ISecondaryCourse>(
    defaultSecondaryCourse
  );

  secondaryCourseData$ = this.secondaryCourseData.asObservable();

  setSecondaryCourseData(data: ISecondaryCourse) {
    this.secondaryCourseData.next(data);
  }

  getAllSecondaryCourses(): Observable<ISecondaryCourse[]> {
    return this.http.get<ISecondaryCourse[]>(this.api_url);
  }

  getSecondaryCourseById(id: number): Observable<ISecondaryCourse> {
    return this.http.get<ISecondaryCourse>(`${this.api_url}/${id}`);
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
