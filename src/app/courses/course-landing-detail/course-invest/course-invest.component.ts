import { afterNextRender, Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-invest',
  standalone: true,
  imports: [],
  templateUrl: './course-invest.component.html',
  styleUrl: './course-invest.component.css',
})
export class CourseInvestComponent {
  @Input() priceAcademy: number = 0;
  @Input() priceRegular: number = 0;
  @Input() courseTitle: string = '';

  studentOptionSelected: boolean = false;
  discount: number = 40;

  selectStudentOption(status: boolean) {
    this.studentOptionSelected = status;
  }
}
