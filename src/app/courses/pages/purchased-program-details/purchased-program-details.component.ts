import { Component } from '@angular/core';
import { ProgramModulesComponent } from './components/program-modules/program-modules.component';
import { ProgramExtraInfoComponent } from './components/program-extra-info/program-extra-info.component';
import { ProgramSchedulesComponent } from './components/program-schedules/program-schedules.component';
import { ProgramCertificatesComponent } from './components/program-certificates/program-certificates.component';
import { CourseOverlayComponent } from '../../../shared/layouts/course-overlay/course-overlay.component';
import { CaretLeftIconComponent } from '../../../shared/icons/caret-left-icon/caret-left-icon.component';

@Component({
  selector: 'app-purchased-program-details',
  standalone: true,
  imports: [
    ProgramModulesComponent,
    ProgramExtraInfoComponent,
    ProgramSchedulesComponent,
    ProgramCertificatesComponent,
    CourseOverlayComponent,
    CaretLeftIconComponent,
  ],
  templateUrl: './purchased-program-details.component.html',
  styleUrl: './purchased-program-details.component.scss',
})
export class PurchasedProgramDetailsComponent {}
