import { Component } from '@angular/core';
import { CourseItemComponent } from '../course-item/course-item.component';
import { GiftIconComponent } from '../../shared/icons/gift-icon/gift-icon.component';
import { ZoomInDirective } from '../../shared/directives/animations/zoom-in.directive';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { GetFreeContentFormComponent } from './get-free-content-form/get-free-content-form.component';

@Component({
  selector: 'app-platform-course-list',
  standalone: true,
  imports: [
    CourseItemComponent,
    GiftIconComponent,
    ZoomInDirective,
    ModalComponent,
    GetFreeContentFormComponent,
  ],
  templateUrl: './platform-course-list.component.html',
  styleUrl: './platform-course-list.component.css',
})
export class PlatformCourseListComponent {
  showFreeContentForm: boolean = false;
}
