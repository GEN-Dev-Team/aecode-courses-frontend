import { Component, inject } from '@angular/core';
import { CaretUpIconLightComponent } from '../../shared/icons/caret-up-icon-light/caret-up-icon-light.component';
import { ZoomInDirective } from '../../shared/directives/animations/zoom-in.directive';
import { PlusIconComponent } from '../../shared/icons/plus-icon/plus-icon.component';
import { InicioIconComponent } from '../../shared/icons/inicio-icon/inicio-icon.component';
import { CaretDownIconLightComponent } from '../../shared/icons/caret-down-icon-light/caret-down-icon-light.component';
import { ShamanIconComponent } from '../../shared/icons/shaman-icon/shaman-icon.component';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { ProfileIconComponent } from '../../shared/icons/profile-icon/profile-icon.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-course-aside',
  standalone: true,
  imports: [
    CaretUpIconLightComponent,
    ZoomInDirective,
    PlusIconComponent,
    InicioIconComponent,
    CaretDownIconLightComponent,
    ShamanIconComponent,
    ProfileIconComponent,
  ],
  templateUrl: './course-aside.component.html',
  styleUrl: './course-aside.component.css',
})
export class CourseAsideComponent {
  router: Router = inject(Router);
  courseService: CourseService = inject(CourseService);
  authService: AuthService = inject(AuthService);

  showAsideList: boolean = true;
  userId: number = 0;
  itemSelected: number = 0;

  ngOnInit(): void {
    this.userId = this.authService.getUserDetails().userId;
  }

  goToCourseList() {
    this.router.navigate(['courses']);
  }

  goToProfileView() {
    this.router.navigate(['profile/' + this.userId]);
  }

  selectItem(item: number) {
    this.itemSelected = item;
  }
}
