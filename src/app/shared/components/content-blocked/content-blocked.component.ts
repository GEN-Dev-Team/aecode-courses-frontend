import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AsyncPipe } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';
import { SuccessIconComponent } from './success-icon/success-icon.component';
import { BlockedIconComponent } from './blocked-icon/blocked-icon.component';

@Component({
  selector: 'app-content-blocked',
  standalone: true,
  imports: [
    ButtonComponent,
    AsyncPipe,
    SuccessIconComponent,
    BlockedIconComponent,
  ],
  templateUrl: './content-blocked.component.html',
  styleUrl: './content-blocked.component.css',
})
export class ContentBlockedComponent {
  @Input() title: string = '';
  @Input() message: string =
    'El siguiente contenido se desbloqueará próximamente.';
  @Input() isMessageTypeSuccess: boolean = false;

  @Output() isClosed = new EventEmitter<boolean>();

  themeService: ThemeService = inject(ThemeService);

  showContentModal = false;
  messageModal = '';

  closeModal(event: boolean) {
    this.isClosed.emit(event);
  }

  openContentModal() {
    this.showContentModal = true;
  }
}
