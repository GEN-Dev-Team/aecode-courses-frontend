import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-invest',
  standalone: true,
  imports: [CommonModule],
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
    this.finalPriceAcademy = Math.round(
      this.priceAcademy - (this.priceAcademy * this.discount) / 100
    );
    this.finalPriceRegular = Math.round(
      this.priceRegular - (this.priceRegular * this.discount) / 100
    );
  }
}
