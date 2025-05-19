import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-program-certificates',
  standalone: true,
  imports: [],
  templateUrl: './program-certificates.component.html',
  styleUrl: './program-certificates.component.scss',
})
export class ProgramCertificatesComponent {
  @Input() certificateUrls: any[] = [];
}
