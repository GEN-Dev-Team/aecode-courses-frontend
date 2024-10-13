import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AccCreatedIconComponent } from '../../../shared/icons/acc-created-icon/acc-created-icon.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ButtonComponent, AccCreatedIconComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  showContentModal = false;
  @Input() ev_url: string = '';
}
