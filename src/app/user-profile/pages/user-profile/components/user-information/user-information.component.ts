import { Component, inject, signal } from '@angular/core';
import { defaultLogInData, ILogin } from '../../../../../home/interface/Login';
import { ProfileSectionBoxComponent } from '../../../../components/profile-section-box/profile-section-box.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { ProfileBoxItemComponent } from '../../../../components/profile-box-item/profile-box-item.component';
import { ManageUserDataService } from '../../../../services/manage-user-data.service';

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [ProfileSectionBoxComponent, ProfileBoxItemComponent],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss',
})
export class UserInformationComponent {
  userService = inject(ManageUserDataService);

  userListAtributes = [
    {
      title: 'Nombre completo',
      key: 'fullname',
      value: '',
    },
    {
      title: 'Teléfono',
      key: 'phoneNumber',
      value: '',
    },
    {
      title: 'Estado académico',
      key: 'education',
      value: '',
    },
    {
      title: 'Correo',
      key: 'email',
      value: '',
    },
    {
      title: 'País',
      key: 'country',
      value: '',
    },
    {
      title: 'Fecha de nacimiento',
      key: 'birthdate',
      value: '',
    },
  ];

  ngOnInit(): void {
    this.userListAtributes.forEach((item) => {
      item.value = (this.userService.userDataInfo() as any)[item.key] ?? '-';
    });
  }
}
