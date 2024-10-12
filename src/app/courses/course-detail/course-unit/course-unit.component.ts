import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CaretUpIconComponent } from '../../../shared/icons/caret-up-icon/caret-up-icon.component';
import { CaretDownIconComponent } from '../../../shared/icons/caret-down-icon/caret-down-icon.component';
import { PadlockIconComponent } from '../../../shared/icons/padlock-icon/padlock-icon.component';
import { NgClass } from '@angular/common';
import { IModule } from '../../interface/Module';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ContentBlockedComponent } from '../../../shared/components/content-blocked/content-blocked.component';

@Component({
  selector: 'app-course-unit',
  standalone: true,
  imports: [
    CaretUpIconComponent,
    CaretDownIconComponent,
    PadlockIconComponent,
    NgClass,
    ModalComponent,
    ContentBlockedComponent,
  ],
  templateUrl: './course-unit.component.html',
  styleUrl: './course-unit.component.css',
})
export class CourseUnitComponent {
  @Input() module!: IModule;
  @Output() unit_video = new EventEmitter<SafeResourceUrl>();
  safeUrl: SafeResourceUrl | undefined;
  showBlockedModal = false;

  showItems = false;

  constructor(private sanitizer: DomSanitizer) {}

  selectUnitVideo(url: string) {
    if (this.module.orderNumber === 1) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/TmiPLKkhMhk'
      );
      this.unit_video.emit(this.safeUrl);
      console.log('Video disponible');
    } else if (this.module.orderNumber === 2) {
      this.module.classes.forEach((classItem) => {
        if (classItem.orderNumber === 3) {
          this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://www.youtube.com/embed/OnM6X9aJLRI'
          );
          this.unit_video.emit(this.safeUrl);
        } else {
          this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
          this.unit_video.emit(this.safeUrl);
        }
      });
    } else {
      console.log('Video no disponible');
      this.showBlockedModal = true;
    }
  }
}
