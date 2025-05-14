import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HomeCommunityIconComponent } from '../../../../home/icons/home-community-icon/home-community-icon.component';
import { BookIconComponent } from '../../../../courses/icons/book-icon/book-icon.component';
import { ShoppingCartIconComponent } from '../../../../courses/icons/shopping-cart-icon/shopping-cart-icon.component';
import { SyncCourseIconComponent } from '../../../icons/sync-course-icon/sync-course-icon.component';
import { ThemeService } from '../../../../core/services/theme.service';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ICommunityHeaderItem } from '../header.component';
import { ChatbotIconComponent } from '../icons/chatbot-icon/chatbot-icon.component';
import { HomeIconComponent } from '../icons/home-icon/home-icon.component';

@Component({
  selector: 'app-header-item',
  standalone: true,
  imports: [
    HomeCommunityIconComponent,
    BookIconComponent,
    ShoppingCartIconComponent,
    SyncCourseIconComponent,
    AsyncPipe,
    ChatbotIconComponent,
    HomeIconComponent,
  ],
  templateUrl: './header-item.component.html',
  styleUrl: './header-item.component.scss',
})
export class HeaderItemComponent {
  @Input() headerItem!: ICommunityHeaderItem;
  @Input() headerItemSelected!: ICommunityHeaderItem;
  @Output() emitHeaderItemSelected = new EventEmitter<ICommunityHeaderItem>();

  route: Router = inject(Router);
  themeService: ThemeService = inject(ThemeService);
  window: any;

  redirectToView(item: ICommunityHeaderItem) {
    this.emitHeaderItemSelected.emit(item);
    this.route.navigate([`${item.route}`]);
  }
}
