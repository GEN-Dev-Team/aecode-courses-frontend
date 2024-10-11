import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor() {}

  isMobileDevice(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor;
    return /android|iphone|ipad|iPod|mobile|windows phone/i.test(userAgent);
  }
}
