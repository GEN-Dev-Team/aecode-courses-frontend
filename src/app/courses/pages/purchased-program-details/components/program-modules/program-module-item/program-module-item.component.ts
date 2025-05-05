import { Component } from '@angular/core';
import { CaretDownIconComponent } from '../../../../../../shared/icons/caret-down-icon/caret-down-icon.component';
import { CaretUpIconComponent } from '../../../../../../shared/icons/caret-up-icon/caret-up-icon.component';

@Component({
  selector: 'app-program-module-item',
  standalone: true,
  imports: [CaretDownIconComponent, CaretUpIconComponent],
  templateUrl: './program-module-item.component.html',
  styleUrl: './program-module-item.component.scss',
})
export class ProgramModuleItemComponent {
  openDropdown = false;
}
