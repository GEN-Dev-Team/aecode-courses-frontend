import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
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
import { EmailSenderService } from '../../courses/services/email-sender.service';
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
  renderer: Renderer2 = inject(Renderer2);
  @ViewChild('mouseShadow') shadowElement!: ElementRef;
  @ViewChild('formContainer') formContainer!: ElementRef;

  openForm = false;

  initialForm: FormGroup = this.fb.group({
    full_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  ngAfterViewInit(): void {
    if (this.browserService.isBrowser()) {
      document.addEventListener('mousemove', this.onMouseMove.bind(this));
    }
  }

  onMouseMove(event: MouseEvent) {
    if (!this.shadowElement || !this.formContainer) return;

    const formRect = this.formContainer.nativeElement.getBoundingClientRect();
    let { clientX, clientY } = event;

    const relativeX = Math.min(
      Math.max(clientX - formRect.left, 0),
      formRect.width
    );
    const relativeY = Math.min(
      Math.max(clientY - formRect.top, 0),
      formRect.height
    );

    const shadowSize = 150;
    this.renderer.setStyle(
      this.shadowElement.nativeElement,
      'left',
      `${relativeX - shadowSize / 2}px`
    );
    this.renderer.setStyle(
      this.shadowElement.nativeElement,
      'top',
      `${relativeY - shadowSize / 2}px`
    );
  }

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
