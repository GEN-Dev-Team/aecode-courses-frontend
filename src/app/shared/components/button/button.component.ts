import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  themeService: ThemeService = inject(ThemeService);

  @Input() class: string = '';
}
