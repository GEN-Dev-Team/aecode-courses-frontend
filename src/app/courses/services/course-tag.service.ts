import { inject, Injectable } from '@angular/core';
<<<<<<< HEAD
import { environment } from '../../../environments/environment';
=======
import { environment } from '../../../environment/environment';
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
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
