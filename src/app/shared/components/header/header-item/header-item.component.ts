import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HomeCommunityIconComponent } from '../../../../home/icons/home-community-icon/home-community-icon.component';
import { BookIconComponent } from '../../../../courses/icons/book-icon/book-icon.component';
import { ShoppingCartIconComponent } from '../../../../courses/icons/shopping-cart-icon/shopping-cart-icon.component';
import { SyncCourseIconComponent } from '../../../icons/sync-course-icon/sync-course-icon.component';
import { ThemeService } from '../../../../core/services/theme.service';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header-item',
  standalone: true,
  imports: [
    HomeCommunityIconComponent,
    BookIconComponent,
    ShoppingCartIconComponent,
    SyncCourseIconComponent,
    AsyncPipe,
  ],
  templateUrl: './header-item.component.html',
  styleUrl: './header-item.component.scss',
})
export class HeaderItemComponent {
  @Input() headerItem: any;
  @Input() headerIdSelected: number = 0;
  @Output() emitHeaderIdSelected = new EventEmitter<number>();
  route: Router = inject(Router);
  themeService: ThemeService = inject(ThemeService);

  redirectToView(item: any) {
    this.emitHeaderIdSelected.emit(item.id);
    this.route.navigate([`${item.route}`]);
  }
}
