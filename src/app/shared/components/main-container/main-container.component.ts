import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [NgClass],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css',
})
export class MainContainerComponent {
  @Input() class: string = '';
}
