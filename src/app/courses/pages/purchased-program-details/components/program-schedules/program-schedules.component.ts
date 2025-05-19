import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-program-schedules',
  standalone: true,
  imports: [],
  templateUrl: './program-schedules.component.html',
  styleUrl: './program-schedules.component.scss',
})
export class ProgramSchedulesComponent {
  @Input() schedules: any[] = [];
  @Input() urljoinclass: any;
}
