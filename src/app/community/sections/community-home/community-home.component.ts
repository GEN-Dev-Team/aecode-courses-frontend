import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-community-home',
  standalone: true,
  imports: [],
  templateUrl: './community-home.component.html',
  styleUrl: './community-home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommunityHomeComponent {
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
}
