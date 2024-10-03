import { Component } from '@angular/core';
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
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent {
  course!: ICourse;
  unit_url_video!: SafeResourceUrl;
  showBlockedModal = false;
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCourse(1);
  }

  getCourse(id: number) {
    this.courseService.getCourse(id).subscribe((response) => {
      this.course = response;
      console.log('course:', response);
    });
  }

  onUnitVideoChange(url: SafeResourceUrl) {
    this.unit_url_video = url;
    console.log('Padre:', this.unit_url_video); // Aquí se debería ver el SafeResourceUrl
  }
}
