import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudyPlan } from '../../interface/secondary-course/StudyPlan';
import { CaretDownIconComponent } from '../../../shared/icons/caret-down-icon/caret-down-icon.component';
import { CaretUpIconComponent } from '../../../shared/icons/caret-up-icon/caret-up-icon.component';
import { StopWatchIconComponent } from '../../../shared/icons/stop-watch-icon/stop-watch-icon.component';

@Component({
  selector: 'app-course-landing-unit',
  standalone: true,
  imports: [
    CaretDownIconComponent,
    CaretUpIconComponent,
    StopWatchIconComponent,
  ],
  templateUrl: './course-landing-unit.component.html',
  styleUrl: './course-landing-unit.component.css',
})
export class CourseLandingUnitComponent {
  @Input() studyplanItem!: IStudyPlan;
  @Input() studyUnitIdSelected!: number;
  @Output() emitUnitIdSelected = new EventEmitter<number>();

  ngOnInit(): void {
    if (this.studyplanItem.studyplanId === 1) {
      this.sendUnitIdSelected(this.studyplanItem.studyplanId);
    }
  }

  sendUnitIdSelected(unitId: number) {
    this.emitUnitIdSelected.emit(unitId);
  }
}
