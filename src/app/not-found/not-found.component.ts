import { Component } from '@angular/core';
import { HomeFooterComponent } from '../home/home-footer/home-footer.component';
import { HomeHeaderComponent } from '../home/home-header/home-header.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [HomeFooterComponent, HomeHeaderComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {}
