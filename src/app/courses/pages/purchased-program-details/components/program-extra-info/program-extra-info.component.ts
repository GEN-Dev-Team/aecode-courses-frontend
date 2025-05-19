import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-program-extra-info',
  standalone: true,
  imports: [],
  templateUrl: './program-extra-info.component.html',
  styleUrl: './program-extra-info.component.scss',
})
export class ProgramExtraInfoComponent {
  @Input() urlmaterialaccess: any;
  @Input() whatsappGroupLink: any;
}
