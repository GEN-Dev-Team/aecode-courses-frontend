import { afterNextRender, Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-invest',
  standalone: true,
  imports: [],
  templateUrl: './course-invest.component.html',
  styleUrl: './course-invest.component.css',
})
export class CourseInvestComponent {
  @Input() coursePrice: number = 0;
  @Input() courseTitle: string = '';

  studentOptionSelected: boolean = false;
  courseDiscount: number = 41;
  studentCoursePrice: number = 130;
  finalPrice = this.coursePrice - this.courseDiscount;

  selectStudentOption(status: boolean) {
    this.studentOptionSelected = status;
  }
}
