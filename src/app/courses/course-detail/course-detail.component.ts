import { Component } from '@angular/core';
import { MainContainerComponent } from '../../shared/components/main-container/main-container.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CourseUnitComponent } from './course-unit/course-unit.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [MainContainerComponent, ButtonComponent, CourseUnitComponent],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent {}
