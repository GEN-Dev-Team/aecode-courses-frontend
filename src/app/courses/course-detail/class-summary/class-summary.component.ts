import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-class-summary',
  standalone: true,
  imports: [],
  templateUrl: './class-summary.component.html',
  styleUrl: './class-summary.component.css'
})
export class ClassSummaryComponent {

  @Output() isClosed = new EventEmitter<boolean>();

  closeModal() {
    this.isClosed.emit(false);
  }

}
