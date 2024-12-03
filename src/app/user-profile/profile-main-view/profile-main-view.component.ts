import { Component, inject } from '@angular/core';
import { UserService } from '../../home/user.service';
import { CameraIconComponent } from '../../shared/icons/camera-icon/camera-icon.component';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ILogin, IUserDetails } from '../../home/interface/Login';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { environment } from '../../../environment/environment';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { MessageComponent } from '../../shared/components/message/message.component';

@Component({
  selector: 'app-profile-main-view',
  standalone: true,
  imports: [
    CameraIconComponent,
    ReactiveFormsModule,
    AsyncPipe,
    ModalComponent,
    MessageComponent,
  ],
  templateUrl: './profile-main-view.component.html',
  styleUrl: './profile-main-view.component.css',
})
export class ProfileMainViewComponent {
  base_url = environment.base;

  fb: FormBuilder = inject(FormBuilder);
  userService: UserService = inject(UserService);

  userData = JSON.parse(localStorage.getItem('user') || '{}');

  userData$: Observable<ILogin> = this.userService.getUser(
    this.userData.userId
  );

  userDetails$: Observable<IUserDetails> = this.userService.getUserDetailsById(
    this.userData.userId
  );

  changePassword: boolean = false;
  showChangePasswordError: boolean = false;
  showMessageModal: boolean = false;
  dataUpdated: boolean = false;
  profileImgUrl: string = '';

  // userDataForm = this.fb.group({
  //   userId: new FormControl(0),
  //   fullname: new FormControl(''),
  //   email: new FormControl(''),
  //   birthdate: new FormControl(''),
  //   phoneNumber: new FormControl(''),
  //   gender: new FormControl(''),
  //   experience: new FormControl(''),
  // });

  // userProfileImageForm = this.fb.group({
  //   detailsId: new FormControl(0),
  //   userId: new FormControl(0),
  //   profilepicture: new FormControl(''),
  // });

  // userChangePasswordForm = this.fb.group({
  //   userId: new FormControl(0),
  //   passwordHash: new FormControl(''),
  //   newPassword: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  // });

  userDataForm = this.fb.group({
    userId: new FormControl(this.userData.userId),
    fullname: new FormControl(this.userData.fullname),
    email: new FormControl(this.userData.email),
    birthdate: new FormControl(this.convertDateToISO(this.userData.birthdate)),
    phoneNumber: new FormControl(this.userData.phoneNumber),
    gender: new FormControl(this.userData.gender),
    experience: new FormControl(this.userData.experience),
  });

  userProfileImageForm = this.fb.group({
    detailsId: new FormControl(0),
    userId: new FormControl(this.userData.userId),
    profilepicture: new FormControl(this.userData.userId),
  });

  userChangePasswordForm = this.fb.group({
    userId: new FormControl(this.userData.userId),
    passwordHash: new FormControl(this.userData.passwordHash),
    newPassword: new FormControl(this.userData.passwordHash),
    confirmPassword: new FormControl(''),
  });

  ngOnInit(): void {
    this.userData$.subscribe((response) => {
      this.userData = response;
    });

    this.userDetails$.subscribe((response) => {
      this.profileImgUrl = this.base_url + response.profilepicture;
    });
  }

  sendUserData() {
    this.userDataForm.patchValue(this.userDataForm.value);

    this.userDataForm.patchValue({
      birthdate: this.convertISOToSpanishDate(
        this.userDataForm.value.birthdate
      ),
    });

    this.userProfileImageForm.patchValue({
      detailsId: this.userData.detailsId,
      userId: this.userData.userId,
      profilepicture: this.profileImgUrl,
    });

    // this.sendUserChangeImgProfile();

    this.userService.updateUser(this.userDataForm.value as any).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        this.showMessageModal = true;
        this.dataUpdated = true;
      }
    );
  }

  sendUserChangeImgProfile() {
    // this.userChangePasswordForm.patchValue({
    //   userId: this.userData.userId,
    //   passwordHash: this.userData.passwordHash,
    //   newPassword: this.profileImgUrl,
    // });

    console.log(this.userChangePasswordForm.value);
  }

  showProfileImg(event: any) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];

      // console.log(input);
      // console.log(input.files);
      // console.log(input.files[0]);

      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecciona un archivo de imagen válido.');
        input.value = '';
        return;
      }

      // Leer el archivo como URL de datos
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImgUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  sendChangePasswordForm() {
    const userId = this.userChangePasswordForm.value.userId as number;
    const currentPassword = this.userChangePasswordForm.value
      .passwordHash as string;
    const newPassword = this.userChangePasswordForm.value.newPassword as string;
    const confirmPassword = this.userChangePasswordForm.value
      .confirmPassword as string;

    if (newPassword === confirmPassword) {
      this.userService
        .updateUserPassword(userId, currentPassword, newPassword)
        .subscribe(
          (response) => {},
          (error) => {
            this.showMessageModal = true;
            this.changePassword = false;
            this.showChangePasswordError = false;

            this.userChangePasswordForm.patchValue({
              passwordHash: newPassword,
            });
          }
        );
    } else {
      this.showMessageModal = true;
      this.showChangePasswordError = true;
    }
  }

  convertDateToISO(dateString: string): string {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  }

  convertISOToSpanishDate(isoDate: any) {
    if (!isoDate) return '';

    // Dividir la fecha por guiones
    const [year, month, day] = isoDate.split('-');

    // Devolver la fecha en formato dd/MM/yyyy
    return `${day}/${month}/${year}`;
  }
}
