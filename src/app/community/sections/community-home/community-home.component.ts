import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  signal,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { BrowserService } from '../../../core/services/browser.service';

@Component({
  selector: 'app-community-home',
  standalone: true,
  imports: [],
  templateUrl: './community-home.component.html',
  styleUrl: './community-home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommunityHomeComponent {
  swiperElement = signal<SwiperContainer | null>(null);
  browserService: BrowserService = inject(BrowserService);

  videoList: any[] = [
    {
      id: 1,
      video_url: '/assets/images/community/colaboradores .webm',
    },
    {
      id: 2,
      video_url: '/assets/images/community/Embajadores.webm',
    },
    {
      id: 3,
      video_url: '/assets/images/community/Redes.webm',
    },
    {
      id: 4,
      video_url: '/assets/images/community/colaboradores .webm',
    },
    {
      id: 5,
      video_url: '/assets/images/community/Embajadores.webm',
    },
    {
      id: 6,
      video_url: '/assets/images/community/Redes.webm',
    },
  ];

  ngAfterViewInit(): void {
    if (this.browserService.isBrowser()) {
      const swiperElemConstructor = document.querySelector('swiper-container');
      const swiperOptions: SwiperOptions = {
        loop: true,
        navigation: true,
        slidesPerView: 5,
        centeredSlides: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
        },
        on: {
          afterInit: () => this.handleafterInit(),
          slideChangeTransitionStart: () =>
            this.handleslideNextTransitionStart(),
        },
      };

      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElement.set(swiperElemConstructor as SwiperContainer);
      this.swiperElement()?.initialize();
    }
  }

  handleslideNextTransitionStart(): void {
    const slide_active = document.querySelector(
      '.swiper-slide-active video'
    ) as HTMLVideoElement | null;

    const slide_prev = document.querySelector(
      '.swiper-slide-prev video'
    ) as HTMLVideoElement | null;

    const slide_next = document.querySelector(
      '.swiper-slide-next video'
    ) as HTMLVideoElement | null;

    if (slide_active) {
      slide_active.setAttribute('autoplay', 'true');
      slide_active.play();
    }

    if (slide_prev) {
      slide_prev.currentTime = 0;
      slide_prev.pause();
      slide_prev.removeAttribute('autoplay');
    }

    if (slide_next) {
      slide_next.currentTime = 0;
      slide_next.pause();
      slide_next.removeAttribute('autoplay');
    }
  }

  handleafterInit(): void {
    const slide_active = document.querySelector(
      '.swiper-slide-active video'
    ) as HTMLVideoElement | null;

    if (slide_active) {
      slide_active.setAttribute('autoplay', 'true');
      slide_active.play();
    }
  }
}
