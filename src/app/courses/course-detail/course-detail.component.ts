import { Component } from '@angular/core';
import { MainContainerComponent } from '../../shared/components/main-container/main-container.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CourseUnitComponent } from './course-unit/course-unit.component';
import { CourseService } from '../course.service';
import { ICourse } from '../interface/Course';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [MainContainerComponent, ButtonComponent, CourseUnitComponent],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent {
  course!: ICourse;
  unit_url_video!: SafeResourceUrl;
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCourse(1);
  }

  getCourse(id: number) {
    this.courseService.getCourse(id).subscribe((response) => {
      this.course = response;
      console.log('course:', response);
    });
  }

  onUnitVideoChange(url: SafeResourceUrl) {
    this.unit_url_video = url;
    console.log('Padre:', this.unit_url_video); // Aquí se debería ver el SafeResourceUrl
  }
}
