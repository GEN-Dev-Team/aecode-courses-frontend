import { Component } from '@angular/core';
import { MainContainerComponent } from '../shared/components/main-container/main-container.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SendIconComponent } from '../shared/icons/send-icon/send-icon.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [MainContainerComponent, SocialMediaComponent, SendIconComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {}
