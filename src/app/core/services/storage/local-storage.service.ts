import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { StorageService } from './storage';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends StorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    super(isPlatformBrowser(platformId) ? window.localStorage : null);
  }
}
