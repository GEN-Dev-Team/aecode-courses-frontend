import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AsyncPipe, Location } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';
import { SuccessIconComponent } from './success-icon/success-icon.component';
import { BlockedIconComponent } from './blocked-icon/blocked-icon.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-content-blocked',
  standalone: true,
  imports: [
    ButtonComponent,
    AsyncPipe,
    SuccessIconComponent,
    BlockedIconComponent,
    ModalComponent,
  ],
  templateUrl: './content-blocked.component.html',
  styleUrl: './content-blocked.component.css',
})
export class ContentBlockedComponent {
  @Input() isOpen: boolean = false;
  @Input() hasBackButton: boolean = false;
  @Input() title: string = '';
  @Input() message: string =
    'El siguiente contenido se desbloqueará próximamente.';
  @Input() isMessageTypeSuccess: boolean = false;

  @Output() isClosed = new EventEmitter<boolean>();

  themeService: ThemeService = inject(ThemeService);
  location: Location = inject(Location);

  showContentModal = false;
  messageModal = '';

  closeModal(event: boolean) {
    if (!this.hasBackButton) {
      this.isClosed.emit(event);
    } else {
      this.location.back();
    }
  }

  openContentModal() {
    this.showContentModal = true;
  }
}
