import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
  signal,
} from '@angular/core';
import { ICollaborator } from '../../interfaces/Collaborator';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { CollabsLikeIconComponent } from '../../icons/collabs-like-icon/collabs-like-icon.component';
import { BrowserService } from '../../../core/services/browser.service';
import { IEmbajador } from '../../interfaces/Embajador';

@Component({
  selector: 'app-community-collaborators',
  standalone: true,
  imports: [CollabsLikeIconComponent],
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
        'https://imgs.search.brave.com/fuJ1S3nOrhPiLrGJP1JRhmbizoA1SHjLRxPoXA2lABM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/Mjk4OTkwNy9waG90/by9tYWRyaWQtc3Bh/aW4taWxpYS10b3B1/cmlhLWF0dGVuZHMt/dGhlLXByZW1pZXJl/LW9mLXRvcHVyaWEt/YXQtY2luZXMtY2Fs/bGFvLW9uLXNlcHRl/bWJlci0xOC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RDMz/bXRKLUhVUEpOTW1q/R0VUek5jUlhpYnBU/NkQzTWRUZUtHTE5P/Tl9EST0',
      group: 'ACI PUC',
      description:
        'Me uní a AECODE por su enfoque innovador en Ingeniería Civil y el impacto de la automatización en el diseño estructural. Busco optimizar procesos, hacer soluciones más eficientes y aprender junto a profesionales que comparten esta visión. Es una gran oportunidad de crecimiento y colaboración.',
    },
    {
      id: 2,
      name: 'ACI UTEC',
      image_url: '',
      group: 'ACI UTEC',
      description:
        'Me uní a AECODE por su enfoque innovador en Ingeniería Civil y el impacto de la automatización en el diseño estructural. Busco optimizar procesos, hacer soluciones más eficientes y aprender junto a profesionales que comparten esta visión. Es una gran oportunidad de crecimiento y colaboración.',
    },
    {
      id: 3,
      name: 'ADEIC PUCP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FADEIC%20PUCP.webp?alt=media&token=1084f791-7803-45f6-979a-b70e82ac6260',
      group: 'ADEIC PUCP',
      description:
        'Me uní a AECODE por su enfoque innovador en Ingeniería Civil y el impacto de la automatización en el diseño estructural. Busco optimizar procesos, hacer soluciones más eficientes y aprender junto a profesionales que comparten esta visión. Es una gran oportunidad de crecimiento y colaboración.',
    },
    {
      id: 4,
      name: 'ALEIC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FALEIC.webp?alt=media&token=e9f356a8-46d1-403e-adbf-bfd3dda85502',
      group: 'ALEIC',
      description:
        'Me uní a AECODE por su enfoque innovador en Ingeniería Civil y el impacto de la automatización en el diseño estructural. Busco optimizar procesos, hacer soluciones más eficientes y aprender junto a profesionales que comparten esta visión. Es una gran oportunidad de crecimiento y colaboración.',
    },
    {
      id: 5,
      name: 'ANEIC ARGENTINA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20ARGENTINA.webp?alt=media&token=0ee8ab53-0503-4405-8ef9-db35cdf97611',
      group: 'ANEIC ARGENTINA',
      description:
        'Me uní a AECODE por su enfoque innovador en Ingeniería Civil y el impacto de la automatización en el diseño estructural. Busco optimizar procesos, hacer soluciones más eficientes y aprender junto a profesionales que comparten esta visión. Es una gran oportunidad de crecimiento y colaboración.',
    },
    {
      id: 6,
      name: 'ANEIC EL SALVADOR',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20EL%20SALVADOR.webp?alt=media&token=71879117-0fbe-4bb4-92bf-92516a602596',
      group: 'ANEIC EL SALVADOR',
      description:
        'Me uní a AECODE por su enfoque innovador en Ingeniería Civil y el impacto de la automatización en el diseño estructural. Busco optimizar procesos, hacer soluciones más eficientes y aprender junto a profesionales que comparten esta visión. Es una gran oportunidad de crecimiento y colaboración.',
    },
    {
      id: 7,
      name: 'ANEIC UNSA',
      image_url: '',
      group: 'ANEIC UNSA',
      description:
        'Me uní a AECODE por su enfoque innovador en Ingeniería Civil y el impacto de la automatización en el diseño estructural. Busco optimizar procesos, hacer soluciones más eficientes y aprender junto a profesionales que comparten esta visión. Es una gran oportunidad de crecimiento y colaboración.',
    },
    {
      id: 8,
      name: 'ASCEIC BOLIVIA',
      image_url: '',
      group: 'ASCEIC BOLIVIA',
      description:
        'Me uní a AECODE por su enfoque innovador en Ingeniería Civil y el impacto de la automatización en el diseño estructural. Busco optimizar procesos, hacer soluciones más eficientes y aprender junto a profesionales que comparten esta visión. Es una gran oportunidad de crecimiento y colaboración.',
    },
    {
      id: 9,
      name: 'CE LEAN UP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCE%20LEAN%20UPC.webp?alt=media&token=c46a1102-c01b-4c8d-a018-f3d2f35951cc',
      group: 'CE LEAN UP',
      description:
        'Me uní a AECODE por su enfoque innovador en Ingeniería Civil y el impacto de la automatización en el diseño estructural. Busco optimizar procesos, hacer soluciones más eficientes y aprender junto a profesionales que comparten esta visión. Es una gran oportunidad de crecimiento y colaboración.',
    },
    {
      id: 10,
      name: 'CIVIAL UTEC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      group: 'CIVIAL UTEC',
      description:
        'Me uní a AECODE por su enfoque innovador en Ingeniería Civil y el impacto de la automatización en el diseño estructural. Busco optimizar procesos, hacer soluciones más eficientes y aprender junto a profesionales que comparten esta visión. Es una gran oportunidad de crecimiento y colaboración.',
    },
  ];

  embajadores_list: IEmbajador[] = [
    {
      id: 1,
      name: 'Sydney Sweeney',
      image_url:
        'https://imgs.search.brave.com/Vk0XLJmnwDROcM0KTiryXYLUcx5KHJhwB9GmEDl7q4w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHVibGluZXdzLmd0/L3Jlc2l6ZXIvdjIv/Q1dFRERVRkhCRkZJ/QkxSVzZQRUxEUEFE/M0UuanBnP3NtYXJ0/PXRydWUmYXV0aD03/ZjgwYjViNWQzMGQ1/OTIwNmRkMTZjYTc4/ODY4MjQ4YTM1NmVm/NTcxZjdhYjk1NmEy/N2U5YjBiZmJkOTk5/NmVhJndpZHRoPTEx/NTAmaGVpZ2h0PTY0/Ng',
      tag_list: [
        'Arquitecto',
        'Coordinador BIM',
        'Diseño y Construcción',
        'VDC',
        'IA',
      ],
    },
    {
      id: 2,
      name: 'ACI UTEC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FACI%20UTEC.webp?alt=media&token=51dc3607-d40f-4f29-beb8-92b66d828521',
      tag_list: [
        'Arquitecto',
        'Coordinador BIM',
        'Diseño y Construcción',
        'VDC',
        'IA',
      ],
    },
    {
      id: 3,
      name: 'ADEIC PUCP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FADEIC%20PUCP.webp?alt=media&token=1084f791-7803-45f6-979a-b70e82ac6260',
      tag_list: [
        'Arquitecto',
        'Coordinador BIM',
        'Diseño y Construcción',
        'VDC',
        'IA',
      ],
    },
    {
      id: 4,
      name: 'ALEIC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FALEIC.webp?alt=media&token=e9f356a8-46d1-403e-adbf-bfd3dda85502',
      tag_list: [
        'Arquitecto',
        'Coordinador BIM',
        'Diseño y Construcción',
        'VDC',
        'IA',
      ],
    },
    {
      id: 5,
      name: 'ANEIC ARGENTINA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20ARGENTINA.webp?alt=media&token=0ee8ab53-0503-4405-8ef9-db35cdf97611',
      tag_list: [
        'Arquitecto',
        'Coordinador BIM',
        'Diseño y Construcción',
        'VDC',
        'IA',
      ],
    },
    {
      id: 6,
      name: 'ANEIC EL SALVADOR',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20EL%20SALVADOR.webp?alt=media&token=71879117-0fbe-4bb4-92bf-92516a602596',
      tag_list: [
        'Arquitecto',
        'Coordinador BIM',
        'Diseño y Construcción',
        'VDC',
        'IA',
      ],
    },
    {
      id: 7,
      name: 'ANEIC UNSA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FANEIC%20UNSA%20(1).webp?alt=media&token=0360e06a-7c89-44b6-9c10-ffa0feb4f9ec',
      tag_list: [
        'Arquitecto',
        'Coordinador BIM',
        'Diseño y Construcción',
        'VDC',
        'IA',
      ],
    },
    {
      id: 8,
      name: 'ASCEIC BOLIVIA',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FASCEIC%20BOLIVIA.webp?alt=media&token=a6b7f1ea-e67f-4431-9881-a2c5c4206529',
      tag_list: [
        'Arquitecto',
        'Coordinador BIM',
        'Diseño y Construcción',
        'VDC',
        'IA',
      ],
    },
    {
      id: 9,
      name: 'CE LEAN UP',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCE%20LEAN%20UPC.webp?alt=media&token=c46a1102-c01b-4c8d-a018-f3d2f35951cc',
      tag_list: [
        'Arquitecto',
        'Coordinador BIM',
        'Diseño y Construcción',
        'VDC',
        'IA',
      ],
    },
    {
      id: 10,
      name: 'CIVIAL UTEC',
      image_url:
        'https://firebasestorage.googleapis.com/v0/b/digitalproduct-6d2f8.firebasestorage.app/o/prod%2Fcomunidad%2Fgrupos_estudiantiles%2FCIVIAL%20UTEC.webp?alt=media&token=3d02f213-039c-4648-8900-832ba47dd26b',
      tag_list: [
        'Arquitecto',
        'Coordinador BIM',
        'Diseño y Construcción',
        'VDC',
        'IA',
      ],
    },
  ];

  itemDataSelected: any = this.colaborators_list[0];

  changeCollabsButton(value: boolean) {
    this.collabsButtonSelected = value;

    if (value) {
      this.itemDataSelected = this.colaborators_list[0];
    } else {
      this.itemDataSelected = this.embajadores_list[0];
    }
  }

  selectItem(item: any, index: number) {
    this.itemSelected = index;
    this.itemDataSelected = item;
    console.log(this.itemSelected);
    console.log(this.itemDataSelected);
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
