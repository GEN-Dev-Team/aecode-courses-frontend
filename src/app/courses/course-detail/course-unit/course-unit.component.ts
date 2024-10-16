import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CaretUpIconComponent } from '../../../shared/icons/caret-up-icon/caret-up-icon.component';
import { CaretDownIconComponent } from '../../../shared/icons/caret-down-icon/caret-down-icon.component';
import { PadlockIconComponent } from '../../../shared/icons/padlock-icon/padlock-icon.component';
import { NgClass } from '@angular/common';
import { IModule } from '../../interface/Module';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ContentBlockedComponent } from '../../../shared/components/content-blocked/content-blocked.component';
import { AuthService } from '../../../core/services/auth.service';
import { TestComponent } from '../test/test.component';

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
    TestComponent,
  ],
  templateUrl: './course-unit.component.html',
  styleUrl: './course-unit.component.css',
})
export class CourseUnitComponent {
  @Input() module!: IModule;
  @Output() unit_video = new EventEmitter<SafeResourceUrl>();
  @Output() module_id = new EventEmitter<number>();
  @Output() class_name = new EventEmitter<string>();
  @Output() class_description = new EventEmitter<string>();
  youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;

  safeUrl!: SafeResourceUrl;
  showBlockedModal = false;
  showItems = false;
  showEvaluation = false;
  isUserLogged = false;

  constructor(
    private sanitizer: DomSanitizer,
    private authService: AuthService
  ) {
    this.authService.isLoggedIn$().subscribe((isLogged) => {
      this.isUserLogged = isLogged;
    });
  }

  selectUnitVideo(url: string, name: string, description: string) {
    if (this.youtubeRegex.test(url) && this.isUserLogged) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      this.unit_video.emit(this.safeUrl);
      this.module_id.emit(this.module.orderNumber);
      this.class_name.emit(name);
      this.class_description.emit(description);
    } else {
      this.showBlockedModal = true;
    }
  }

  evaluation() {
    this.showEvaluation = !this.showEvaluation;
  }
}
