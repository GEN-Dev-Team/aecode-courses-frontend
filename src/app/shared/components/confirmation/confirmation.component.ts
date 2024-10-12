import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AccCreatedIconComponent } from '../../icons/acc-created-icon/acc-created-icon.component';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [ButtonComponent, AccCreatedIconComponent],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent {
  showContentModal = false;
  @Input() ev_url!: string;
}
