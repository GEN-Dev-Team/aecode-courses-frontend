import { Component, inject } from '@angular/core';
import { HomeFooterComponent } from '../home/home-footer/home-footer.component';
import { HomeHeaderComponent } from '../home/home-header/home-header.component';
import { CaretLeftIconComponent } from '../shared/icons/caret-left-icon/caret-left-icon.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [HomeFooterComponent, HomeHeaderComponent, CaretLeftIconComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  location: Location = inject(Location);

  whatsappMessage =
    'https://api.whatsapp.com/send?phone=+51900121245&text=Hola AECODE, quisiera conocer más detalles de los programas e iniciativas de colaboración que cuentan. Quiero contactar con un asesor.';

  goBack() {
    this.location.back();
  }
}
