import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICoupon } from '../interfaces/Coupon';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  api_url = environment.base + '/coupons';

  http: HttpClient = inject(HttpClient);

  getAllCoupons(): Observable<ICoupon[]> {
    return this.http.get<ICoupon[]>(`${this.api_url}`);
  }

  getCouponById(id: number): Observable<ICoupon> {
    return this.http.get<ICoupon>(`${this.api_url}/${id}`);
  }
}
