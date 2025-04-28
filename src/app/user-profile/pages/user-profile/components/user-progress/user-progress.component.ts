import { Component } from '@angular/core';

@Component({
  selector: 'app-user-progress',
  standalone: true,
  imports: [],
  templateUrl: './user-progress.component.html',
  styleUrl: './user-progress.component.scss',
})
export class UserProgressComponent {
  userCourseList = [
    {
      title: 'AECODE',
      subtitle: 'AECODE',
      progress: 100,
    },
    {
      title: 'AECODE',
      subtitle: 'AECODE',
      progress: 100,
    },
  ];
}
