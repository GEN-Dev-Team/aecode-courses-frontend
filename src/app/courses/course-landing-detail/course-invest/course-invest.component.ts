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
  @Input() discount: number = 0;
  @Input() courseTitle: string = '';

  studentOptionSelected: boolean = false;
  finalPriceAcademy: number = 0;
  finalPriceRegular: number = 0;

  selectStudentOption(status: boolean) {
    this.studentOptionSelected = status;
  }

  ngOnInit(): void {
    this.finalPriceAcademy =
      this.priceAcademy - (this.priceAcademy * this.discount) / 100;
    this.finalPriceRegular =
      this.priceRegular - (this.priceRegular * this.discount) / 100;
  }
}
