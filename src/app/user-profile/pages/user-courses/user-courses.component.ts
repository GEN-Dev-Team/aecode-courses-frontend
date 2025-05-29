import { Component, inject, signal } from '@angular/core';
import { SearchIconComponent } from '../../../admin-panel/icons/search-icon/search-icon.component';
import { MyCourseCardComponent } from './my-course-card/my-course-card.component';
import { SecondaryCourseService } from '../../../courses/services/secondary-course.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-user-courses',
  standalone: true,
  imports: [SearchIconComponent, MyCourseCardComponent],
  templateUrl: './user-courses.component.html',
  styleUrl: './user-courses.component.scss',
})
export class UserCoursesComponent {
  secondaryCourseService = inject(SecondaryCourseService);
  authService = inject(AuthService);

  userCourseList = signal<any>([]);
  userCourseListFiltered = signal<any>([]);
  isSelected: number = 0;
  userId = this.authService.getUserDetails()?.userId;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.userId) {
      this.secondaryCourseService
        .getCourseListByUserId(this.userId)
        .subscribe((data) => {
          this.userCourseList.set(data);
          this.userCourseListFiltered.set(data);
        });
    }
  }

  selectButton(index: number) {
    this.isSelected === index
      ? (this.isSelected = 0)
      : (this.isSelected = index);
  }

  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm === '') {
      this.userCourseListFiltered.set(this.userCourseList());
      return;
    }

    this.userCourseListFiltered.set(
      this.userCourseList().filter((course: any) => {
        return course.title.toLowerCase().includes(searchTerm);
      })
    );
  }
}
