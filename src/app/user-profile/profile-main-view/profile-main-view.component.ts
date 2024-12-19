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
import { EditIconComponent } from '../../shared/icons/edit-icon/edit-icon.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

@Component({
  selector: 'app-profile-main-view',
  standalone: true,
  imports: [
    CameraIconComponent,
    ReactiveFormsModule,
    AsyncPipe,
    ModalComponent,
    MessageComponent,
    EditIconComponent,
    LoaderComponent,
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

  editUserData: boolean = false;
  changePassword: boolean = false;
  showChangePasswordError: boolean = false;
  showMessageModal: boolean = false;
  dataUpdated: boolean = false;
  profileImgUrl: string = '';
  profileImgFile: File = new File([], '');

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
    this.initSubscibtionsAndForms();
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

    this.sendUserChangeImgProfile();

    this.userService.updateUser(this.userDataForm.value as any).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        this.showMessageModal = true;
        this.dataUpdated = true;
        this.editUserData = false;
        this.disableUserForms();
        this.userDataForm.reset();
        this.userDataForm.patchValue({
          userId: this.userData.userId,
        });
      }
    );
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

  sendUserChangeImgProfile() {
    this.userService
      .updateUserDetails(this.userData.userId, this.profileImgFile)
      .subscribe(
        (response) => {
          console.log('User profile image updated:', response);

          this.dataUpdated = true;
          this.showMessageModal = true;
        },
        (error) => {
          if (error.status === 200) {
            console.log('User profile image updated:', error);
            this.dataUpdated = true;
            this.showMessageModal = true;
            this.editUserData = false;
          } else {
            console.log('Error updating user profile image:', error);
          }
        }
      );
  }

  initSubscibtionsAndForms() {
    this.userData$.subscribe((response) => {
      this.userData = response;
    });

    this.userDetails$.subscribe((response) => {
      this.profileImgUrl = this.base_url + response.profilepicture;
    });

    this.disableUserForms();
  }

  showProfileImg(event: any) {
    const input = event.target as HTMLInputElement;
    // Verificar si se ha seleccionado un archivo y asigna el archivo de tipo File
    if (event.target.files.length > 0) {
      this.profileImgFile = event.target.files[0];
    }

    // Verificar si se ha seleccionado un archivo y obtener la url
    if (input.files && input.files[0]) {
      const file = input.files[0];

      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecciona un archivo de imagen válido.');
        input.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        this.profileImgUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  activateEditUserData() {
    this.editUserData = true;
    this.userDataForm.enable();
  }

  enableUserForms() {
    this.userDataForm.enable();
    this.userChangePasswordForm.enable();
  }

  disableUserForms() {
    this.userDataForm.disable();
    this.userChangePasswordForm.disable();
  }

  activateChangePassword() {
    this.changePassword = true;
    this.userChangePasswordForm.enable();
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
