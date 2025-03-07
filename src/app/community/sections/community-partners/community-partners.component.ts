import { Component } from '@angular/core';
import { PartnerItemComponent } from './partner-item/partner-item.component';

@Component({
  selector: 'app-community-partners',
  standalone: true,
  imports: [PartnerItemComponent],
  templateUrl: './community-partners.component.html',
  styleUrl: './community-partners.component.scss',
})
export class CommunityPartnersComponent {
  companyButtonSelected: boolean = true;
}
