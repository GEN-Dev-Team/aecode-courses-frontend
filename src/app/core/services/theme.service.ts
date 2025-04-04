import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BrowserService } from './browser.service';
import { LocalStorageService } from './storage/local-storage.service';
import { StorageService } from './storage/storage';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private rendererFactory: RendererFactory2 = inject(RendererFactory2);
  private _renderer2: Renderer2 = this.rendererFactory.createRenderer(
    null,
    null
  );
  private _currentMode$: BehaviorSubject<ThemeMode> =
    new BehaviorSubject<ThemeMode>('light');

  private localStorage: StorageService = inject(LocalStorageService);
  private browserService: BrowserService = inject(BrowserService);

  constructor() {
    if (this.browserService.isBrowser()) {
      const theme = this.localStorage.getItem('theme') as ThemeMode;
      if (theme) {
        this.setMode(theme);
      } else {
        this.setMode('dark');
      }
    }
  }

  private _updateRootMode = (oldMode: ThemeMode, newMode: ThemeMode) => {
    if (this.browserService.isBrowser()) {
      this._renderer2.removeClass(document.body, oldMode);
      this._renderer2.addClass(document.body, newMode);
      this.localStorage.setItem('theme', newMode);
      console.log('theme', this.localStorage.getItem('theme'));
    }
  };

  public setMode(mode: ThemeMode): void {
    this._updateRootMode(this._currentMode$.value, mode);
    this._currentMode$.next(mode);
  }

  public getMode(): Observable<ThemeMode> {
    return this._currentMode$;
  }
}
