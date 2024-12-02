import { Component, inject } from '@angular/core';
import { UserService } from '../../home/user.service';
import { CameraIconComponent } from '../../shared/icons/camera-icon/camera-icon.component';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ILogin } from '../../home/interface/Login';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile-main-view',
  standalone: true,
  imports: [CameraIconComponent, ReactiveFormsModule, AsyncPipe],
  templateUrl: './profile-main-view.component.html',
  styleUrl: './profile-main-view.component.css',
})
export class ProfileMainViewComponent {
  userData = JSON.parse(localStorage.getItem('user') || '{}');

  fb: FormBuilder = inject(FormBuilder);
  userService: UserService = inject(UserService);

  userDetails$: Observable<ILogin> = this.userService.getUser(
    this.userData.userId
  );

  profileImgUrl: string = '';
  userDataForm = this.fb.group({
    userId: new FormControl(this.userData.userId),
    fullname: new FormControl(this.userData.fullname),
    email: new FormControl(this.userData.email),
    birthdate: new FormControl(this.userData.birthdate),
    phoneNumber: new FormControl(this.userData.phoneNumber),
    gender: new FormControl(this.userData.gender),
    experience: new FormControl(this.userData.experience),
  });

  userProfileImageForm = this.fb.group({
    detailsId: new FormControl(0),
    userId: new FormControl(this.userData.userId),
    profilepicture: new FormControl(''),
  });

  userChangePasswordForm = this.fb.group({
    detailsId: new FormControl(0),
    userId: new FormControl(this.userData.userId),
    profilepicture: new FormControl(''),
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.userDetails$.subscribe((response) => {
      console.log(response);
    });
  }
  sendUserData() {
    this.userDataForm.patchValue(this.userDataForm.value);

    console.log(this.userDataForm.value);
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
}
