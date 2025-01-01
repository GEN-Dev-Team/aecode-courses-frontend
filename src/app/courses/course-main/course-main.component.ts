import { Component, inject, OnInit } from '@angular/core';
import { SearchToolIconComponent } from '../../shared/icons/search-tool-icon/search-tool-icon.component';
import { CourseSearchIconComponent } from '../../shared/icons/course-search-icon/course-search-icon.component';
import { PlatformCourseListComponent } from '../platform-course-list/platform-course-list.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { SecondaryCourseService } from '../services/secondary-course.service';
import { ISecondaryCourse } from '../interface/secondary-course/Secondary-Course';
import { Observable } from 'rxjs';

interface listToRender {
  id: number;
  name: string;
  list: ISecondaryCourse[];
}
@Component({
  selector: 'app-course-main',
  standalone: true,
  imports: [
    SearchToolIconComponent,
    CourseSearchIconComponent,
    PlatformCourseListComponent,
    CourseListComponent,
  ],
  templateUrl: './course-main.component.html',
  styleUrl: './course-main.component.css',
})
export class CourseMainComponent implements OnInit {
  coursesList: listToRender[] = [
    { id: 1, name: 'CURSOS MODALIDAD ASINCRÓNICOS', list: [] },
    { id: 2, name: 'CURSOS MODALIDAD EN VIVO', list: [] },
    { id: 3, name: 'CURSOS PROXIMOS', list: [] },
  ];

  asyncCourseLit: ISecondaryCourse[] = [];
  syncCourseLit: ISecondaryCourse[] = [];
  comingSoonCourseLit: ISecondaryCourse[] = [];

  secondaryCourseService: SecondaryCourseService = inject(
    SecondaryCourseService
  );

  secondaryCourseList$: Observable<ISecondaryCourse[]> =
    this.secondaryCourseService.getAllSecondaryCourses();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.secondaryCourseList$.subscribe((data) => {
      const courseList = data;

      courseList.forEach((course) => {
        if (course.mode === 'ASINCRONO') {
          this.asyncCourseLit.push(course);
        } else if (course.mode === 'EN_VIVO') {
          this.syncCourseLit.push(course);
        } else {
          this.comingSoonCourseLit.push(course);
        }
      });

      this.coursesList[0].list = this.asyncCourseLit;
      this.coursesList[1].list = this.syncCourseLit;
      this.coursesList[2].list = this.comingSoonCourseLit;
    });
  }
}
