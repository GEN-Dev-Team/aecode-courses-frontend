import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../core/services/auth.service';
import { ILogin, IUserDetails } from '../../../home/interface/Login';
import { ProfileSectionBoxComponent } from '../../components/profile-section-box/profile-section-box.component';
import { ProfileBoxItemComponent } from '../../components/profile-box-item/profile-box-item.component';
import { UserService } from '../../services/user.service';
import { ManageUserDataService } from '../../services/manage-user-data.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ProfileSectionBoxComponent,
    ProfileBoxItemComponent,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
})
export class EditProfileComponent {
  base_url = environment.base;

  fb: FormBuilder = inject(FormBuilder);
  userService: UserService = inject(UserService);
  authService: AuthService = inject(AuthService);

  manageUserDataService = inject(ManageUserDataService);

  userData!: ILogin;
  userDetails!: IUserDetails;

  personalInformationList = [
    {
      title: 'Nombre completo',
      key: 'fullname',
      value: '',
    },
    {
      title: 'Correo electrónico',
      key: 'email',
      value: '',
    },
    {
      title: 'Número de telefono',
      key: 'phoneNumber',
      value: '',
    },
    {
      title: 'Género',
      key: 'gender',
      value: '',
    },

    {
      title: 'Fecha de nacimiento',
      key: 'birthdate',
      value: '',
    },
    {
      title: 'País',
      key: 'country',
      value: '',
    },
    {
      title: 'Ciudad / Region',
      key: '',
      value: '',
    },
  ];

  professionalInformationList = [
    {
      title: 'Profesión / Área de especialización',
      key: 'profession',
      value: '',
    },
    {
      title: 'Nivel educativo',
      key: 'education',
      value: '',
    },
    {
      title: 'Linkedin',
      key: 'linkedin',
      value: '',
    },
  ];

  userSecurityList = [
    {
      title: 'Contraseña actual',
      key: 'password',
      value: '',
    },
    {
      title: 'Nueva contraseña',
      key: 'newPassword',
      value: '',
    },
    {
      title: 'Confirmar contraseña',
      key: 'newPasswordConfirm',
      value: '',
    },
  ];

  userStatusList = [
    {
      title: 'Estado',
      key: 'status',
      value: '',
    },
  ];

  userDataForm = this.fb.group({
    userId: new FormControl(0),
    fullname: new FormControl(''),
    email: new FormControl(''),
    birthdate: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(''),
    experience: new FormControl(''),
  });

  ngOnInit(): void {
    this.setUserDataForm();
  }

  setUserDataForm() {
    this.personalInformationList.forEach((item) => {
      item.value =
        (this.manageUserDataService.userDataInfo() as any)[item.key] ?? '-';
    });

    this.professionalInformationList.forEach((item) => {
      item.value =
        (this.manageUserDataService.userDataInfo() as any)[item.key] ?? '-';
    });

    this.userSecurityList.forEach((item) => {
      item.value =
        (this.manageUserDataService.userDataInfo() as any)[item.key] ?? '-';
    });
  }
}
