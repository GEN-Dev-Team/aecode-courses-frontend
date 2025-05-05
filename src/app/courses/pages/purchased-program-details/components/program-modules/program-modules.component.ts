import { Component } from '@angular/core';
import { CaretDownIconLightComponent } from '../../../../../shared/icons/caret-down-icon-light/caret-down-icon-light.component';
import { CaretDownIconComponent } from '../../../../../shared/icons/caret-down-icon/caret-down-icon.component';
import { CaretUpIconComponent } from '../../../../../shared/icons/caret-up-icon/caret-up-icon.component';
import { ProgramModuleItemComponent } from './program-module-item/program-module-item.component';

@Component({
  selector: 'app-program-modules',
  standalone: true,
  imports: [
    CaretDownIconLightComponent,
    CaretDownIconComponent,
    CaretUpIconComponent,
    ProgramModuleItemComponent,
  ],
  templateUrl: './program-modules.component.html',
  styleUrl: './program-modules.component.scss',
})
export class ProgramModulesComponent {}
