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
import { AuthService } from '../../core/services/auth.service';

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
  authService: AuthService = inject(AuthService);

  userData!: ILogin;
  userDetails!: IUserDetails;

  userData$!: Observable<ILogin>;
  userDetails$!: Observable<IUserDetails>;

  editUserData: boolean = false;
  changePassword: boolean = false;
  showChangePasswordError: boolean = false;
  showMessageModal: boolean = false;
  dataUpdated: boolean = false;
  profileImgUrl: string = '';
  profileImgFile: File = new File([], '');

  userDataForm = this.fb.group({
    userId: new FormControl(0),
    fullname: new FormControl(''),
    email: new FormControl(''),
    birthdate: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(''),
    experience: new FormControl(''),
  });

  userProfileImageForm = this.fb.group({
    detailsId: new FormControl(0),
    userId: new FormControl(0),
    profilepicture: new FormControl(''),
  });

  userChangePasswordForm = this.fb.group({
    userId: new FormControl(0),
    passwordHash: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  ngOnInit(): void {
    this.initProfileViewData();

    console.log(this.userDataForm.value);
    console.log(this.userProfileImageForm.value);
    console.log(this.userChangePasswordForm.value);
  }

  sendUserData() {
    this.userDataForm.patchValue({
      birthdate: this.convertISOToSpanishDate(
        this.userDataForm.value.birthdate
      ),
    });

    this.userProfileImageForm.patchValue({
      detailsId: this.userData.userId,
      userId: this.userData.userId,
      profilepicture: this.profileImgUrl,
    });

    this.sendUserChangeImgProfile();

    this.userService.updateUser(this.userDataForm.value as any).subscribe(
      (response) => {},
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
          this.dataUpdated = true;
          this.showMessageModal = true;
        },
        (error) => {
          if (error.status === 200) {
            this.dataUpdated = true;
            this.showMessageModal = true;
            this.editUserData = false;
          } else {
          }
        }
      );
  }

  initProfileViewData() {
    this.userData = this.authService.getUserDetails();

    this.userService
      .getUserDetailsImgById(this.userData.userId)
      .subscribe((response) => {
        this.userDetails = response;
        this.profileImgUrl = this.base_url + response.profilepicture;
      });

    this.userData$ = this.userService.getUser(this.userData.userId);

    this.userDetails$ = this.userService.getUserDetailsImgById(
      this.userData.userId
    );

    this.userData$.subscribe((response) => {
      this.userData = response;
    });

    this.setUserChangePasswordForm();
    this.setUserDataForm();
    this.setUserProfileImageForm();

    this.disableUserForms();
  }

  showProfileImg(event: Event) {
    const input = event.target as HTMLInputElement | null;

    if (!input || !input.files) {
      return;
    }

    const file = input.files[0];
    if (!file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.profileImgUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
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

  setUserProfileImageForm() {
    this.userProfileImageForm.patchValue({
      detailsId: this.userData.userId,
      userId: this.userData.userId,
      profilepicture: this.profileImgUrl,
    });
  }

  setUserDataForm() {
    this.userDataForm.patchValue({
      userId: this.userData.userId,
      fullname: this.userData.fullname,
      email: this.userData.email,
      birthdate: this.convertISOToSpanishDate(this.userData.birthdate),
      phoneNumber: this.userData.phoneNumber,
      gender: this.userData.gender,
      experience: this.userData.experience,
    });
  }

  setUserChangePasswordForm() {
    this.userChangePasswordForm.patchValue({
      userId: this.userData.userId,
      passwordHash: this.userData.passwordHash,
      newPassword: this.userData.passwordHash,
      confirmPassword: this.userData.passwordHash,
    });
  }
}
