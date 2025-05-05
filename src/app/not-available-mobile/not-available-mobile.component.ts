import { Component } from '@angular/core';
import { ArrowRightComponent } from './icons/arrow-right/arrow-right.component';
import { AecoditoMobileComponent } from './icons/aecodito-mobile/aecodito-mobile.component';

@Component({
  selector: 'app-not-available-mobile',
  standalone: true,
  imports: [ArrowRightComponent, AecoditoMobileComponent],
  templateUrl: './not-available-mobile.component.html',
  styleUrl: './not-available-mobile.component.scss',
})
export class NotAvailableMobileComponent {}
