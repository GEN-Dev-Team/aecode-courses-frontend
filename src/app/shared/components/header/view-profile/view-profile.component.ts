import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css',
})
export class ViewProfileComponent {
  constructor(private authService: AuthService) {}

  @Output() isClosed = new EventEmitter<boolean>();

  closeModal() {
    this.isClosed.emit(false);
  }

  logOut() {
    this.authService.logout();
    this.closeModal();
  }
}
