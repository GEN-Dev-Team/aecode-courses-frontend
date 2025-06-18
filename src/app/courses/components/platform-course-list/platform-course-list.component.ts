import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  signal,
} from '@angular/core';
import { CourseItemComponent } from '../course-item/course-item.component';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { SecondaryCourseService } from '../../services/secondary-course.service';
import { ThemeService } from '../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { BrowserService } from '../../../core/services/browser.service';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { AngleRightIconComponent } from '../../icons/angle-right-icon/angle-right-icon.component';
import { AngleLeftIconComponent } from '../../icons/angle-left-icon/angle-left-icon.component';

@Component({
  selector: 'app-platform-course-list',
  standalone: true,
  imports: [
    CourseItemComponent,
    LoaderComponent,
    AsyncPipe,
    AngleRightIconComponent,
    AngleLeftIconComponent,
  ],
  templateUrl: './platform-course-list.component.html',
  styleUrl: './platform-course-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlatformCourseListComponent {
  secondaryCourses: SecondaryCourseService = inject(SecondaryCourseService);
  themeService: ThemeService = inject(ThemeService);
  browserService = inject(BrowserService);
  swiperElement = signal<SwiperContainer | null>(null);

  courseList = signal<any>([]);

  ngOnInit(): void {
    this.secondaryCourses.getMainSecondaryCourses().subscribe((data) => {
      this.courseList.set(data);
    });
  }

  ngAfterViewInit(): void {
    if (this.browserService.isBrowser()) {
      const swiperElemConstructor = document.getElementById(
        'platform-courses-swiper'
      );
      const swiperOptions: SwiperOptions = {
        loop: true,
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 32,
        speed: 700,
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
        },
      };

      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElement.set(swiperElemConstructor as SwiperContainer);
      this.swiperElement()?.initialize();
    }
  }
}
