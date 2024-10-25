import { Component, Input } from '@angular/core';
import { CaretUpIconComponent } from '../../../shared/icons/caret-up-icon/caret-up-icon.component';
import { CaretDownIconComponent } from '../../../shared/icons/caret-down-icon/caret-down-icon.component';
import { PadlockIconComponent } from '../../../shared/icons/padlock-icon/padlock-icon.component';
import { NgClass } from '@angular/common';
import { IModule } from '../../interface/Module';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ContentBlockedComponent } from '../../../shared/components/content-blocked/content-blocked.component';
import { TestComponent } from '../test/test.component';
import { CourseUnitComponent } from '../course-unit/course-unit.component';

@Component({
  selector: 'app-course-module',
  standalone: true,
  imports: [
    CaretUpIconComponent,
    CaretDownIconComponent,
    PadlockIconComponent,
    NgClass,
    ModalComponent,
    ContentBlockedComponent,
    TestComponent,
    CourseUnitComponent,
  ],
  templateUrl: './course-module.component.html',
  styleUrl: './course-module.component.css',
})
export class CourseModuleComponent {
  @Input() module!: IModule;

  safeUrl!: SafeResourceUrl;
  showItems = false;
  showEvaluation = false;

  evaluation() {
    this.showEvaluation = !this.showEvaluation;
  }
}
