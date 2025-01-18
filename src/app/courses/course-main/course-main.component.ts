import { Component, inject, OnInit } from '@angular/core';
import { SearchToolIconComponent } from '../../shared/icons/search-tool-icon/search-tool-icon.component';
import { CourseSearchIconComponent } from '../../shared/icons/course-search-icon/course-search-icon.component';
import { PlatformCourseListComponent } from '../platform-course-list/platform-course-list.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { SecondaryCourseService } from '../services/secondary-course.service';
import { ISecondaryCourse } from '../interface/secondary-course/Secondary-Course';
import { Observable } from 'rxjs';
import { FadeOutDirective } from '../../shared/directives/animations/fade-out.directive';

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
    FadeOutDirective,
  ],
  templateUrl: './course-main.component.html',
  styleUrl: './course-main.component.css',
})
export class CourseMainComponent implements OnInit {
  secondaryCourseService: SecondaryCourseService = inject(
    SecondaryCourseService
  );

  coursesList: listToRender[] = [
    { id: 2, name: 'CURSOS - ENERO', list: [] },
    { id: 3, name: 'CURSOS - FEBRERO', list: [] },
    { id: 1, name: 'CURSOS PRÓXIMOS', list: [] },
  ];

  filteredCoursesList: listToRender[] = [];

  secondaryCourseList$: Observable<ISecondaryCourse[]> =
    this.secondaryCourseService.getAllSecondaryCourses();

  ngOnInit(): void {
    this.secondaryCourseList$.subscribe((data) => {
      const asyncCourses = data.filter((course) => course.mode === 'ASINCRONO');
      const syncCourses = data.filter((course) => course.mode === 'EN_VIVO');
      const comingSoonCourses = data.filter(
        (course) => course.mode === 'SINCRONO'
      );

      this.coursesList[0].list = asyncCourses;
      this.coursesList[1].list = syncCourses;
      this.coursesList[2].list = comingSoonCourses;

      // Inicializamos la lista filtrada con los valores originales
      this.resetFilteredCourses();
    });
  }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();

    if (!searchTerm) {
      this.resetFilteredCourses();
      return;
    }

    // Filtrar listas por coincidencia en el título de los cursos
    this.filteredCoursesList = this.coursesList
      .map((group) => ({
        ...group,
        list: group.list.filter((course) =>
          course.title.toLowerCase().includes(searchTerm)
        ),
      }))
      .filter((group) => group.list.length > 0); // Elimina grupos vacíos

    console.log(this.filteredCoursesList);
  }

  private resetFilteredCourses(): void {
    this.filteredCoursesList = JSON.parse(JSON.stringify(this.coursesList));
  }
}
