import { Component, inject } from '@angular/core';
import { InProgressComponent } from '../in-progress/in-progress.component';
import { BrowserService } from '../core/services/browser.service';
import { LoaderComponent } from '../shared/components/loader/loader.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [InProgressComponent, LoaderComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.scss',
})
export class LiveComponent {
  browserService = inject(BrowserService);

  ngOnInit(): void {
    if (this.browserService.isBrowser()) {
      window.location.replace('https://lu.ma/c8sk9crd');
    }
  }
}
