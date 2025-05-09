import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageBoxService {
  // General message box
  showMessageModal = signal(false);
  message = signal('Oops, ocurrió un error. Vuelve a intentarlo.');
  title = signal('¡Algo salió mal!');
  isMessageTypeSuccess = signal(false);
  redirectTo = signal('¡Algo salió mal!');

  // Terms and conditions message box
  showTermsModal = signal(false);
  termsMessage = signal('');

  showMessageBox(
    title: string,
    message: string,
    isMessageTypeSuccess: boolean
  ) {
    this.showMessageModal.set(true);
    this.message.set(message);
    this.title.set(title);
    this.isMessageTypeSuccess.set(isMessageTypeSuccess);
  }

  closeMessageBox() {
    this.showMessageModal.set(false);
  }
}
