import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICommunityHeaderItem } from '../community-header.component';

@Component({
  selector: 'app-coommunity-header-item',
  standalone: true,
  imports: [],
  templateUrl: './coommunity-header-item.component.html',
  styleUrl: './coommunity-header-item.component.scss',
})
export class CoommunityHeaderItemComponent {
  @Input() selectedHeaderItem: string = '';
  @Input() headerItem!: ICommunityHeaderItem;
  @Output() headerItemSelected = new EventEmitter<string>();

  router: Router = inject(Router);

  redirectToSection() {
    this.router.navigate(['community'], { fragment: this.headerItem.section });
    this.headerItemSelected.emit(this.headerItem.name);
  }
}
