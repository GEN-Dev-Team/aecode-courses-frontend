import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import {
  defaultSecondaryCourse,
  ISecondaryCourse,
} from '../interface/secondary-course/Secondary-Course';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

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
}
