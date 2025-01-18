import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CheckGetFreeFormIconComponent } from '../../../shared/icons/check-get-free-form-icon/check-get-free-form-icon.component';
import { ZoomInDirective } from '../../../shared/directives/animations/zoom-in.directive';
import { SquareIconComponent } from '../../../shared/icons/square-icon/square-icon.component';
import { EmailSenderService } from '../../services/email-sender.service';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { defaultEmail, IEmail } from '../../interface/Email';

@Component({
  selector: 'app-get-free-content-form',
  standalone: true,
  imports: [
    CheckGetFreeFormIconComponent,
    ZoomInDirective,
    SquareIconComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './get-free-content-form.component.html',
  styleUrl: './get-free-content-form.component.css',
})
export class GetFreeContentFormComponent {
  @Output() isClosed = new EventEmitter<boolean>();

  emailSenderService: EmailSenderService = inject(EmailSenderService);
  fb: FormBuilder = inject(FormBuilder);
  toastService: ToastrService = inject(ToastrService);

  getFreeForm: FormGroup = this.fb.group({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  isProgrammingSelected: boolean = false;
  isEngineeringSelected: boolean = false;

  sendForm() {
    // this.isClosed.emit(false);
    this.createGetFreeForm();
  }

  createGetFreeForm() {
    if (this.getFreeForm.valid) {
      if (this.isProgrammingSelected || this.isEngineeringSelected) {
        let emailObject: IEmail = defaultEmail;

        if (this.isProgrammingSelected) {
          emailObject = {
            toEmail: this.getFreeForm.value.email,
            subject:
              '🚀 ¡Tu semana comienza con innovación! Descubre Programación Digital',
            body: `
            ¡Hola ${this.getFreeForm.value.name} ${this.getFreeForm.value.lastName}!
            
            Bienvenido/a a una nueva era de aprendizaje con AECODE. 🎯 Cada semana recibirás contenido exclusivo 
            que te acercará a las tendencias más avanzadas en Programación Digital.
            
            🌟 Este material es para ti si:
            ● Quieres dominar herramientas digitales que transforman la ingeniería y la construcción.
            ● Te apasiona la innovación y buscas estar un paso adelante en el sector AEC.

            🤔 ¿Qué lograrás con nuestros cursos?
              Programación Digital:
            ● Aprende a desarrollar soluciones digitales para el mundo AEC.
            ● Conviértete en un/a líder tecnológico/a capaz de integrar BIM, IA y más.

            Accede al KIT GRATUITO en el siguiente link de drive: https://acortar.link/YEVnWk
            
            Estamos emocionados de acompañarte en este viaje hacia el futuro de la construcción digital. 🚀

            Saludos,
            El equipo de AECODE`,
          };
        }
        if (this.isEngineeringSelected) {
          emailObject = {
            toEmail: this.getFreeForm.value.email,
            subject:
              '🚀 ¡Tu semana comienza con innovación! Descubre Ingeniería 4.0',
            body: `
            ¡Hola ${this.getFreeForm.value.name} ${this.getFreeForm.value.lastName}!
            
            Bienvenido/a a una nueva era de aprendizaje con AECODE. 🎯 Cada semana recibirás contenido exclusivo 
            que te acercará a las tendencias más avanzadas en Ingeniería 4.0.
            
            🌟 Este material es para ti si:
            ● Quieres dominar herramientas digitales que transforman la ingeniería y la construcción.
            ● Te apasiona la innovación y buscas estar un paso adelante en el sector AEC.

            🤔 ¿Qué lograrás con nuestros cursos?
              Ingeniería 4.0:
            ● Automatiza procesos con tecnologías inteligentes.
            ● Optimiza tus proyectos con métodos digitales que revolucionan el diseño y la construcción.

            Accede al KIT GRATUITO en el siguiente link de drive: https://acortar.link/YEVnWk
            
            Estamos emocionados de acompañarte en este viaje hacia el futuro de la construcción digital. 🚀

            Saludos,
            El equipo de AECODE`,
          };
        }

        if (this.isProgrammingSelected && this.isEngineeringSelected) {
          emailObject = {
            toEmail: this.getFreeForm.value.email,
            subject:
              '🚀 ¡Tu semana comienza con innovación! Descubre Ingeniería 4.0 y Programación Digital',
            body: `
            ¡Hola ${this.getFreeForm.value.name} ${this.getFreeForm.value.lastName}!
            
            Bienvenido/a a una nueva era de aprendizaje con AECODE. 🎯 Cada semana recibirás contenido exclusivo 
            que te acercará a las tendencias más avanzadas en Ingeniería 4.0 y Programación Digital.
            
            🌟 Este material es para ti si:
            ● Quieres dominar herramientas digitales que transforman la ingeniería y la construcción.
            ● Te apasiona la innovación y buscas estar un paso adelante en el sector AEC.

            🤔 ¿Qué lograrás con nuestros cursos?
              Ingeniería 4.0:
            ● Automatiza procesos con tecnologías inteligentes.
            ● Optimiza tus proyectos con métodos digitales que revolucionan el diseño y la construcción.

              Programación Digital:
            ● Aprende a desarrollar soluciones digitales para el mundo AEC.
            ● Conviértete en un/a líder tecnológico/a capaz de integrar BIM, IA y más.

            Accede al KIT GRATUITO en el siguiente link de drive: https://acortar.link/YEVnWk
            
            Estamos emocionados de acompañarte en este viaje hacia el futuro de la construcción digital. 🚀

            Saludos,
            El equipo de AECODE`,
          };
        }

        console.log(emailObject);
        console.log('Is progra selected: ', this.isProgrammingSelected);
        console.log('Is eng selected: ', this.isEngineeringSelected);

        this.emailSenderService.sendEmail(emailObject).subscribe(
          (response) => {},
          (error) => {
            this.toastService.success('Formulario enviado con éxito.', 'Éxito');
            this.isClosed.emit(false);
          }
        );
      } else {
        this.toastService.error('Seleccione al menos un curso.', 'Error');
      }
    } else {
      this.getFreeForm.markAllAsTouched();

      const controls = this.getFreeForm.controls;
      Object.keys(controls).forEach((controlName) => {
        const control = controls[controlName];

        if (control.errors) {
          if (control.errors['required']) {
            this.toastService.error(
              `El campo "${this.getFieldName(controlName)}" es obligatorio.`,
              'Error'
            );
          }
          if (control.errors['email']) {
            this.toastService.error(`Correo electrónico no válido.`, 'Error');
          }
        }
      });
    }
  }

  getFieldName(fieldName: string): string {
    const fieldNames: { [key: string]: string } = {
      name: 'Nombre',
      lastName: 'Apellido',
      email: 'Email',
    };
    return fieldNames[fieldName] || fieldName;
  }

  closeForm() {
    this.isClosed.emit(false);
  }
}
