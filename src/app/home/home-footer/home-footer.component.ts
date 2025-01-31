import { Component } from '@angular/core';
import { MessageComponent } from '../../shared/components/message/message.component';
import { MessageIconComponent } from '../icons/message-icon/message-icon.component';

@Component({
  selector: 'app-home-footer',
  standalone: true,
  imports: [MessageComponent, MessageIconComponent],
  templateUrl: './home-footer.component.html',
  styleUrl: './home-footer.component.css',
})
export class HomeFooterComponent {}
