import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
<<<<<<< HEAD
import { environment } from '../../../environments/environment';
=======
import { environment } from '../../../environment/environment';
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
import { IEmail } from '../interface/Email';

@Injectable({
  providedIn: 'root',
})
export class EmailSenderService {
  api_url: string = environment.base + '/email';

  http: HttpClient = inject(HttpClient);

  sendEmail(full_name: string, email: string, consulta: string) {
    let emailObject = {
      toEmail: email,
      subject: '🚀 ¡Hey Aecoder! Hemos recibido tus comentarios.',
      body: `
              ¡Hola ${full_name}!
                  
              Gracias por tomarte el tiempo de escribirnos en el buzón de mensajes de AECODE.📨
              Hemos recibido tu consulta y nuestro equipo está trabajando para responderte lo más pronto posible.

                  
              Mientras tanto, queremos invitarte a explorar más sobre todo lo que AECODE trae para ti este 2025.:
              🌐 Cursos de vanguardia en Ingeniería 4.0 y Programación Digital.
              🌟 Iniciativas que lideran la innovación en el sector AEC.
              🎓 Recursos que te impulsan a dominar las tecnologías del futuro.

  
              Descubre cómo puedes llevar tus habilidades al siguiente nivel con nuestros
              programas y contenidos exclusivos.
      
              Haz click en el enlace para explorar más: www.aecode.ai/courses
                  
              Estamos emocionados de ayudarte a alcanzar tus metas. Gracias por ser parte de
              esta comunidad que transforma el sector de la construcción digital. 🚀
      
              ¡Nos pondremos en contacto muy pronto contigo!
                  
              Saludos,
              El equipo de AECODE`,
    };

    console.info('Data: ', emailObject);

    this.http.post<IEmail>(`${this.api_url}/send`, emailObject).subscribe({
      next: (res) => {
        console.info('Correo enviado: ', res);
      },
      error: (err) => {
        console.error('Error: ', err);
      },
    });
  }
}
