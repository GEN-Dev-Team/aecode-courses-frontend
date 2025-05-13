import { inject, Injectable, signal } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { defaultLogInData, ILogin } from '../../home/interface/Login';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ManageUserDataService {
  fb = inject(FormBuilder);
  userService = inject(UserService);
  router = inject(Router);

  userDataInfo = signal<ILogin>(defaultLogInData);

  userEditForm = signal(
    this.fb.group({
      userId: new FormControl(0),
      fullname: new FormControl(''),
      email: new FormControl(''),
      status: new FormControl(''),
      passwordHash: new FormControl(''),
    })
  );

  setUserEditForm(user: any) {
    this.userEditForm.set(
      this.fb.group({
        userId: new FormControl(user.userId),
        fullname: new FormControl(user.fullname),
        email: new FormControl(user.email),
        status: new FormControl(user.status),
        passwordHash: new FormControl(user.passwordHash),
      })
    );
  }

  setUserDataInfo(userId: number) {
    if (!userId && userId !== 0) return;

    this.userService.getUser(userId).subscribe({
      next: (userData) => {
        this.userDataInfo.set(userData);
      },
      error: () => {
        this.router.navigate(['/training']);
      },
    });
  }

  clearUserDataInfo() {
    this.userDataInfo.set(defaultLogInData);
  }
}
