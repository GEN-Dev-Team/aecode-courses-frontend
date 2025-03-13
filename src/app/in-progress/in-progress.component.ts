import { Component } from '@angular/core';
import { HomeFooterComponent } from '../home/home-footer/home-footer.component';
import { HomeHeaderComponent } from '../home/home-header/home-header.component';

@Component({
  selector: 'app-in-progress',
  standalone: true,
  imports: [HomeFooterComponent, HomeHeaderComponent],
  templateUrl: './in-progress.component.html',
  styleUrl: './in-progress.component.scss',
})
export class InProgressComponent {}
