import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { ICourseTag } from '../interface/CourseTag';

@Injectable({
  providedIn: 'root',
})
export class CourseTagService {
  base_url = environment.base + '/coursetag';

  http: HttpClient = inject(HttpClient);

  getCourseTags() {
    return this.http.get<ICourseTag[]>(`${this.base_url}`);
  }
}
