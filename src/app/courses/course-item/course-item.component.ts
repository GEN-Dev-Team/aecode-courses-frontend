import { Component } from '@angular/core';
import { LevelIconComponent } from '../../shared/icons/level-icon/level-icon.component';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [LevelIconComponent],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
})
export class CourseItemComponent {}
