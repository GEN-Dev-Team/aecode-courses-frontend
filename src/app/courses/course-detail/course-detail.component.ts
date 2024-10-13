import { Component, Input, OnInit } from '@angular/core';
import { MainContainerComponent } from '../../shared/components/main-container/main-container.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CourseUnitComponent } from './course-unit/course-unit.component';
import { CourseService } from '../course.service';
import { ICourse } from '../interface/Course';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ContentBlockedComponent } from '../../shared/components/content-blocked/content-blocked.component';
import { HouseIconComponent } from '../icons/house-icon/house-icon.component';
import { CaretRightIconComponent } from '../icons/caret-right-icon/caret-right-icon.component';
import { CaretUpIconComponent } from '../../shared/icons/caret-up-icon/caret-up-icon.component';
import { NextIconComponent } from '../icons/next-icon/next-icon.component';
import { PrevIconComponent } from '../icons/prev-icon/prev-icon.component';
import { CaretDownIconComponent } from '../icons/caret-down-icon/caret-down-icon.component';
import { AuthService } from '../../core/services/auth.service';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    MainContainerComponent,
    ButtonComponent,
    CourseUnitComponent,
    ModalComponent,
    ContentBlockedComponent,
    HouseIconComponent,
    CaretRightIconComponent,
    CaretUpIconComponent,
    CaretDownIconComponent,
    NextIconComponent,
    PrevIconComponent,
    NgIf,
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent implements OnInit {
  course_id: number = -1;
  course!: ICourse;
  unit_url_video: SafeResourceUrl = '';
  showBlockedModal = false;
  isUserLogged: boolean = false;
  module_id = 0;
  class_name = '¡Bienvenido al curso!';
  class_description = '¡Bienvenido al curso!';

  constructor(
    private courseService: CourseService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Suscribirse al estado de inicio de sesión
    this.authService.isLoggedIn$().subscribe((loggedInStatus) => {
      this.isUserLogged = loggedInStatus;
    });

    this.course_id = this.route.snapshot.params['id'];
    if (this.course_id == 1) {
      this.unit_url_video = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/psmL5TV8DLg'
      );
    }
    if (this.course_id == 2) {
      this.unit_url_video = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/iLymJT74ukA'
      );
    }

    this.getCourse(this.course_id);
  }

  getCourse(id: number) {
    this.courseService.getCourse(id).subscribe((response) => {
      this.course = response;
      this.course.modules.sort((a, b) => a.orderNumber - b.orderNumber);
      this.course.modules.forEach((module) => {
        module.classes.sort((a, b) => a.orderNumber - b.orderNumber);
      });
    });
  }

  onUnitVideoChange(url: SafeResourceUrl) {
    this.unit_url_video = url;
  }
  onModuleIdChange(value: number) {
    this.module_id = value;
  }
  onClassNameChange(value: string) {
    this.class_name = value;
  }
  onClassDescriptionChange(value: string) {
    this.class_description = value;
  }

  callIntroVideo() {
    this.unit_url_video = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/psmL5TV8DLg'
    );
  }
}
