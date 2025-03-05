import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeMode, ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
