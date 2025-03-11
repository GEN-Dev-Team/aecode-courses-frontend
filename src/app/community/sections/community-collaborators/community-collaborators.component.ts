import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  signal,
} from '@angular/core';
import { CommunityInstagramIconComponent } from '../../icons/community-instagram-icon/community-instagram-icon.component';
import { CommunityLinkedinIconComponent } from '../../icons/community-linkedin-icon/community-linkedin-icon.component';
import { CommunityYoutubeIconComponent } from '../../icons/community-youtube-icon/community-youtube-icon.component';
import { CommunityFacebookIconComponent } from '../../icons/community-facebook-icon/community-facebook-icon.component';
import { ZoomInDirective } from '../../../shared/directives/animations/zoom-in.directive';
import {
  defaultCollaborator,
  ICollaborator,
} from '../../interfaces/Collaborator';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { CollabsLikeIconComponent } from '../../icons/collabs-like-icon/collabs-like-icon.component';
import { BrowserService } from '../../../core/services/browser.service';

@Component({
  selector: 'app-community-collaborators',
  standalone: true,
  imports: [
    CommunityInstagramIconComponent,
    CommunityLinkedinIconComponent,
    CommunityYoutubeIconComponent,
    CommunityFacebookIconComponent,
    ZoomInDirective,
    CollabsLikeIconComponent,
  ],
  templateUrl: './community-collaborators.component.html',
  styleUrl: './community-collaborators.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommunityCollaboratorsComponent {
  swiperElement = signal<SwiperContainer | null>(null);
  @Input() collabsButtonSelected: boolean = true;
  itemSelected: number = 0;
  browserService: BrowserService = inject(BrowserService);

  colaborators_list: ICollaborator[] = [
    {
      id: 1,
      name: 'ACI PUCP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FACI%20PUCP.webp?alt=media&token=250da474-b95e-4672-bbe6-8cd69364884b',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 2,
      name: 'ACI UTEC',
      image_url: '',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 3,
      name: 'ADEIC PUCP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FADEIC%20PUCP.webp?alt=media&token=1084f791-7803-45f6-979a-b70e82ac6260',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 4,
      name: 'ALEIC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FALEIC.webp?alt=media&token=e9f356a8-46d1-403e-adbf-bfd3dda85502',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 5,
      name: 'ANEIC ARGENTINA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20ARGENTINA.webp?alt=media&token=0ee8ab53-0503-4405-8ef9-db35cdf97611',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 6,
      name: 'ANEIC EL SALVADOR',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20EL%20SALVADOR.webp?alt=media&token=71879117-0fbe-4bb4-92bf-92516a602596',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 7,
      name: 'ANEIC UNSA',
      image_url: '',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 8,
      name: 'ASCEIC BOLIVIA',
      image_url: '',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 9,
      name: 'CE LEAN UP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCE%20LEAN%20UPC.webp?alt=media&token=c46a1102-c01b-4c8d-a018-f3d2f35951cc',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 10,
      name: 'CIVIAL UTEC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
  ];

  embajadores_list: ICollaborator[] = [
    {
      id: 1,
      name: 'ACI PUCP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FACI%20PUCP.webp?alt=media&token=250da474-b95e-4672-bbe6-8cd69364884b',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 2,
      name: 'ACI UTEC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FACI%20UTEC.webp?alt=media&token=51dc3607-d40f-4f29-beb8-92b66d828521',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 3,
      name: 'ADEIC PUCP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FADEIC%20PUCP.webp?alt=media&token=1084f791-7803-45f6-979a-b70e82ac6260',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 4,
      name: 'ALEIC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FALEIC.webp?alt=media&token=e9f356a8-46d1-403e-adbf-bfd3dda85502',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 5,
      name: 'ANEIC ARGENTINA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20ARGENTINA.webp?alt=media&token=0ee8ab53-0503-4405-8ef9-db35cdf97611',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 6,
      name: 'ANEIC EL SALVADOR',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20EL%20SALVADOR.webp?alt=media&token=71879117-0fbe-4bb4-92bf-92516a602596',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 7,
      name: 'ANEIC UNSA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20UNSA%20(1).webp?alt=media&token=0360e06a-7c89-44b6-9c10-ffa0feb4f9ec',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 8,
      name: 'ASCEIC BOLIVIA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FASCEIC%20BOLIVIA.webp?alt=media&token=a6b7f1ea-e67f-4431-9881-a2c5c4206529',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 9,
      name: 'CE LEAN UP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCE%20LEAN%20UPC.webp?alt=media&token=c46a1102-c01b-4c8d-a018-f3d2f35951cc',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
    {
      id: 10,
      name: 'CIVIAL UTEC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      description: '',
      facebook_url: '',
      youtube_url: '',
      instragram_url: '',
      linkedin_url: '',
    },
  ];

  itemDataSelected: ICollaborator = this.colaborators_list[0];

  selectItem(item: ICollaborator, index: number) {
    this.itemSelected = index;
    this.itemDataSelected = item;
  }

  ngAfterViewInit(): void {
    if (this.browserService.isBrowser()) {
      const swiperElemConstructor = document.getElementById(
        'collaborators-swiper'
      );
      const swiperOptions: SwiperOptions = {
        loop: true,
        navigation: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        speed: 1000,
      };

      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElement.set(swiperElemConstructor as SwiperContainer);
      this.swiperElement()?.initialize();
    }
  }
}
function inject(BrowserService: any): BrowserService {
  throw new Error('Function not implemented.');
}
