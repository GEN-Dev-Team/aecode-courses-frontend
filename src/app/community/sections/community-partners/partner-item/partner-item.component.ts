import { Component, Input } from '@angular/core';
import { IPartner } from '../../../interfaces/Partner';

@Component({
  selector: 'app-partner-item',
  standalone: true,
  imports: [],
  templateUrl: './partner-item.component.html',
  styleUrl: './partner-item.component.scss',
})
export class PartnerItemComponent {
  @Input() partnerItem!: IPartner;
}
