import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

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

  videoList: any[] = [
    {
      id: 1,
      video_url: '/assets/images/community/mundo.mp4',
    },
    {
      id: 2,
      video_url: '/assets/images/community/mundo.mp4',
    },
    {
      id: 3,
      video_url: '/assets/images/community/mundo.mp4',
    },
    {
      id: 4,
      video_url: '/assets/images/community/mundo.mp4',
    },
    {
      id: 5,
      video_url: '/assets/images/community/mundo.mp4',
    },
    {
      id: 6,
      video_url: '/assets/images/community/mundo.mp4',
    },
  ];

  ngAfterViewInit(): void {
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      loop: true,
      navigation: true,
      slidesPerView: 5,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    };

    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElement.set(swiperElemConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
