import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SquareIconComponent } from '../../shared/icons/square-icon/square-icon.component';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrowserService } from '../../core/services/browser.service';
import { IEmail, defaultEmail } from '../../courses/interface/Email';
import { EmailSenderService } from '../../courses/services/email-sender.service';
import { ISheetItem } from '../../core/services/interfaces/Sheet-Item';
import { GoogleSheetService } from '../../core/services/google-sheet.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [SquareIconComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Input() userMessage: string = '';
  @Output() openModal = new EventEmitter<boolean>();

  browserService: BrowserService = inject(BrowserService);
  emailSenderService: EmailSenderService = inject(EmailSenderService);
  fb: FormBuilder = inject(FormBuilder);
  toastService: ToastrService = inject(ToastrService);
  gsService: GoogleSheetService = inject(GoogleSheetService);

  openForm = false;

  initialForm: FormGroup = this.fb.group({
    full_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  closeModal() {
    this.openModal.emit(false);
  }

  sendMessage() {
    if (this.initialForm.invalid) {
      this.toastService.error('Por favor, completa los campos.', 'Error');
      return;
    }

    this.emailSenderService.sendEmail(
      this.initialForm.value.full_name,
      this.initialForm.value.email,
      this.userMessage
    );

    this.gsService.createSheetItem(
      this.initialForm.value.full_name,
      this.initialForm.value.email,
      this.userMessage
    );

    this.toastService.success('Formulario enviado con éxito.', 'Éxito');
    this.initialForm.reset();
    this.closeModal();
  }
}
