import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { ISecondaryCourse } from '../interface/secondary-course/Secondary-Course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SecondaryCourseService {
  http: HttpClient = inject(HttpClient);

  api_url = environment.base + '/secondarycourses';

  getAllSecondaryCourses(): Observable<ISecondaryCourse[]> {
    return this.http.get<ISecondaryCourse[]>(this.api_url);
  }
}
