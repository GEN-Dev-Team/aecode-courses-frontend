import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IStudyPlan } from '../../interface/secondary-course/StudyPlan';
import { CaretDownIconComponent } from '../../../shared/icons/caret-down-icon/caret-down-icon.component';
import { CaretUpIconComponent } from '../../../shared/icons/caret-up-icon/caret-up-icon.component';
import { StopWatchIconComponent } from '../../../shared/icons/stop-watch-icon/stop-watch-icon.component';
import { ThemeService } from '../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-course-landing-unit',
  standalone: true,
  imports: [
    CaretDownIconComponent,
    CaretUpIconComponent,
    StopWatchIconComponent,
    AsyncPipe,
  ],
  templateUrl: './course-landing-unit.component.html',
  styleUrl: './course-landing-unit.component.css',
})
export class CourseLandingUnitComponent {
  @Input() studyplanItem!: IStudyPlan;
  @Input() studyOrderNumberSelected!: number;
  @Output() emitUnitIdSelected = new EventEmitter<number>();
  themeService: ThemeService = inject(ThemeService);

  ngOnInit(): void {
    if (this.studyplanItem.orderNumber === 1) {
      this.emitUnitIdSelected.emit(this.studyplanItem.orderNumber);
    }
  }

  sendUnitIdSelected(orderId: number) {
    if (this.studyOrderNumberSelected === orderId) {
      this.emitUnitIdSelected.emit(-1);
    } else {
      this.emitUnitIdSelected.emit(orderId);
    }
  }
}
