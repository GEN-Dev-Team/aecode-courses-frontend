import { Component, inject } from '@angular/core';
import { CaretUpIconComponent } from '../../shared/icons/caret-up-icon/caret-up-icon.component';
import { CaretUpIconLightComponent } from '../../shared/icons/caret-up-icon-light/caret-up-icon-light.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ZoomInDirective } from '../../shared/directives/animations/zoom-in.directive';
import { PlusIconComponent } from '../../shared/icons/plus-icon/plus-icon.component';
import { InicioIconComponent } from '../../shared/icons/inicio-icon/inicio-icon.component';
import { SunIconComponent } from '../../shared/icons/sun-icon/sun-icon.component';
import { MoonIconComponent } from '../../shared/icons/moon-icon/moon-icon.component';
import { CaretDownIconLightComponent } from '../../shared/icons/caret-down-icon-light/caret-down-icon-light.component';
import { ShamanIconComponent } from '../../shared/icons/shaman-icon/shaman-icon.component';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { ProfileIconComponent } from '../../shared/icons/profile-icon/profile-icon.component';

@Component({
  selector: 'app-course-aside',
  standalone: true,
  imports: [
    CaretUpIconLightComponent,
    ZoomInDirective,
    PlusIconComponent,
    InicioIconComponent,
    SunIconComponent,
    MoonIconComponent,
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

  isDarkTheme: boolean = false;
  showAsideList: boolean = true;

  goToCourseList() {
    this.router.navigate(['courses']);
  }
}
