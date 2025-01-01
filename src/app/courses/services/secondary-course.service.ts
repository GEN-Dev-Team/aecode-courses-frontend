import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import {
  defaultSecondaryCourse,
  ISecondaryCourse,
} from '../interface/secondary-course/Secondary-Course';
import { BehaviorSubject, Observable } from 'rxjs';

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
}
