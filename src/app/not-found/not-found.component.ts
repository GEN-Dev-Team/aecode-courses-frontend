import { Component } from '@angular/core';
import { HomeFooterComponent } from '../home/home-footer/home-footer.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [HomeFooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {}
