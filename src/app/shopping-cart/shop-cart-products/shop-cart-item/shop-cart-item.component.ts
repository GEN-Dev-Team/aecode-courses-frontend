import { Component } from '@angular/core';
import { CaretUpIconLightComponent } from '../../../shared/icons/caret-up-icon-light/caret-up-icon-light.component';
import { CaretDownIconLightComponent } from '../../../shared/icons/caret-down-icon-light/caret-down-icon-light.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { WatchIconComponent } from '../../../shared/icons/watch-icon/watch-icon.component';
import { CourseSessionIconComponent } from '../../../shared/icons/course-session-icon/course-session-icon.component';
import { AsyncCourseIconComponent } from '../../../shared/icons/async-course-icon/async-course-icon.component';

@Component({
  selector: 'app-shop-cart-item',
  standalone: true,
  imports: [
    CaretUpIconLightComponent,
    CaretDownIconLightComponent,
    ButtonComponent,
    WatchIconComponent,
    CourseSessionIconComponent,
    AsyncCourseIconComponent,
  ],
  templateUrl: './shop-cart-item.component.html',
  styleUrl: './shop-cart-item.component.scss',
})
export class ShopCartItemComponent {
  dropdown: boolean = false;
}
