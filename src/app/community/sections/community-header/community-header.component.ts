import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AecodeIconComponent } from '../../../home/icons/aecode-icon/aecode-icon.component';
import { Router } from '@angular/router';
import { CoommunityHeaderItemComponent } from './coommunity-header-item/coommunity-header-item.component';

export interface ICommunityHeaderItem {
  name: string;
  section: string;
}

@Component({
  selector: 'app-community-header',
  standalone: true,
  imports: [AecodeIconComponent, CoommunityHeaderItemComponent],
  templateUrl: './community-header.component.html',
  styleUrl: './community-header.component.scss',
})
export class CommunityHeaderComponent {
  @Output() collabsButtonSelected = new EventEmitter<boolean>();
  router: Router = inject(Router);

  headerItemSelected: string = 'Inicio';

  headerItemsList: ICommunityHeaderItem[] = [
    {
      name: 'Inicio',
      section: 'home',
    },
    {
      name: 'Colaboradores',
      section: 'collabs',
    },

    {
      name: 'Embajadores',
      section: 'collabs',
    },
    {
      name: 'Partners',
      section: 'partners',
    },
  ];

  redirectToMainView() {
    this.router.navigate(['/']);
  }

  sendHeaderItemSelected(headerItemName: string) {
    if (headerItemName === 'Colaboradores') {
      this.collabsButtonSelected.emit(true);
    } else if (headerItemName === 'Embajadores') {
      this.collabsButtonSelected.emit(false);
    }
    this.headerItemSelected = headerItemName;
  }
}
