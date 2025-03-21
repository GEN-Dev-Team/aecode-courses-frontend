import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import {
  defaultCollaborator,
  ICollaborator,
} from '../../interfaces/Collaborator';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { CollabsLikeIconComponent } from '../../icons/collabs-like-icon/collabs-like-icon.component';
import { BrowserService } from '../../../core/services/browser.service';
import { IEmbajador } from '../../interfaces/Embajador';
import { PartnersSwiperComponent } from './partners-swiper/partners-swiper.component';
import { CollabsSwiperComponent } from './collabs-swiper/collabs-swiper.component';

@Component({
  selector: 'app-community-collaborators',
  standalone: true,
  imports: [PartnersSwiperComponent, CollabsSwiperComponent],
  templateUrl: './community-collaborators.component.html',
  styleUrl: './community-collaborators.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommunityCollaboratorsComponent {
  @Input() collabsButtonSelected: boolean = true;

  itemDataSelected: ICollaborator = defaultCollaborator;

  changeCollabsButton(value: boolean) {
    this.collabsButtonSelected = value;
  }

  selectItem(item: ICollaborator) {
    this.itemDataSelected = item;
  }
}
