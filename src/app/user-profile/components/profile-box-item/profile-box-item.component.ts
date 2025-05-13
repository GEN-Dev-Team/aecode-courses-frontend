import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-box-item',
  standalone: true,
  imports: [],
  templateUrl: './profile-box-item.component.html',
  styleUrl: './profile-box-item.component.scss',
})
export class ProfileBoxItemComponent {
  @Input() item: any;
}
