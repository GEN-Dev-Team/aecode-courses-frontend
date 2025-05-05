import { Component } from '@angular/core';

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss',
})
export class UserInformationComponent {
  userListAtributes = [
    {
      title: 'Nombre completo',
    },
    {
      title: 'Teléfono',
    },
    {
      title: 'Estado académico',
    },
    {
      title: 'Correo',
    },
    {
      title: 'País',
    },
    {
      title: 'Fecha de nacimiento',
    },
  ];
}
