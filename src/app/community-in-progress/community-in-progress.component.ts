import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CaretLeftIconComponent } from '../shared/icons/caret-left-icon/caret-left-icon.component';
import { HomeFooterComponent } from '../home/home-footer/home-footer.component';

@Component({
  selector: 'app-community-in-progress',
  standalone: true,
  imports: [CaretLeftIconComponent, HomeFooterComponent],
  templateUrl: './community-in-progress.component.html',
  styleUrl: './community-in-progress.component.scss',
})
export class CommunityInProgressComponent {
  location: Location = inject(Location);

  whatsappMessage =
    'https://api.whatsapp.com/send?phone=+51900121245&text=¡Hola! ¡Quiero colaborar con AECODE!';

  goBack() {
    this.location.back();
  }
}
