import { Component, Input } from '@angular/core';
import { ProgramModuleItemComponent } from './program-module-item/program-module-item.component';

@Component({
  selector: 'app-program-modules',
  standalone: true,
  imports: [ProgramModuleItemComponent],
  templateUrl: './program-modules.component.html',
  styleUrl: './program-modules.component.scss',
})
export class ProgramModulesComponent {
  @Input() programModules: any[] = [];
}
