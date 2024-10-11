import { Component, Input, OnInit } from '@angular/core';
import { MainContainerComponent } from '../../shared/components/main-container/main-container.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CourseUnitComponent } from './course-unit/course-unit.component';
import { CourseService } from '../course.service';
import { ICourse } from '../interface/Course';
import { SafeResourceUrl } from '@angular/platform-browser';
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
  unit_url_video!: SafeResourceUrl;
  showBlockedModal = false;
  isUserLogged: boolean = false;

  constructor(
    private courseService: CourseService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Suscribirse al estado de inicio de sesión
    this.authService.isLoggedIn$().subscribe((loggedInStatus) => {
      this.isUserLogged = loggedInStatus;
    });

    this.course_id = this.route.snapshot.params['id'];
    this.getCourse(this.course_id);
  }

  getCourse(id: number) {
    this.courseService.getCourse(id).subscribe((response) => {
      this.course = response;
      this.course.modules.sort((a, b) => a.orderNumber - b.orderNumber);
      console.log(this.course);
    });
  }

  onUnitVideoChange(url: SafeResourceUrl) {
    this.unit_url_video = url;
  }
}
