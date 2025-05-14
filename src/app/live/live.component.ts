import { Component, inject } from '@angular/core';
import { InProgressComponent } from '../in-progress/in-progress.component';
import { BrowserService } from '../core/services/browser.service';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [InProgressComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.scss',
})
export class LiveComponent {
  browserService = inject(BrowserService);

  ngOnInit(): void {
    if (this.browserService.isBrowser()) {
      window.location.href = 'https://lu.ma/5sa2znpu';
    }
  }
}
