import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeMode, ThemeService } from './core/services/theme.service';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aecode-courses-frontend';

  public availableModes = ['light', 'dark'];
  public themeService: ThemeService = inject(ThemeService);

  ngOnInit(): void {}

  public onSetMode(mode: ThemeMode): void {
    this.themeService.setMode(mode);
  }
}
