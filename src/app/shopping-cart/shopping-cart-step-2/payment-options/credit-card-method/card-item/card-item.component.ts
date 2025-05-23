import { Component, inject, Input } from '@angular/core';
import { InterbankIconComponent } from '../../../../icons/interbank-icon/interbank-icon.component';
import { BcpIconComponent } from '../../../../icons/bcp-icon/bcp-icon.component';
import { CopyIconComponent } from '../../../../icons/copy-icon/copy-icon.component';
import { ThemeService } from '../../../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { BrowserService } from '../../../../../core/services/browser.service';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    InterbankIconComponent,
    BcpIconComponent,
    CopyIconComponent,
    AsyncPipe,
  ],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent {
  @Input() cardItem: any;

  themeService = inject(ThemeService);
  browserService = inject(BrowserService);

  copyToClipboard(value: string) {
    if (this.browserService.isBrowser()) navigator.clipboard.writeText(value);
  }
}
