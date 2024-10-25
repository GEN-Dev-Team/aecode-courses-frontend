import { Component, inject, Input } from '@angular/core';
import { IUnit } from '../../interface/Unit';
import { CaretUpIconComponent } from '../../../shared/icons/caret-up-icon/caret-up-icon.component';
import { CaretDownIconComponent } from '../../../shared/icons/caret-down-icon/caret-down-icon.component';
import { PadlockIconComponent } from '../../../shared/icons/padlock-icon/padlock-icon.component';
import { AuthService } from '../../../core/services/auth.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ContentBlockedComponent } from '../../../shared/components/content-blocked/content-blocked.component';
import { CourseSessionComponent } from '../course-session/course-session.component';

@Component({
  selector: 'app-course-unit',
  standalone: true,
  imports: [
    CaretUpIconComponent,
    CaretDownIconComponent,
    PadlockIconComponent,
    ModalComponent,
    ContentBlockedComponent,
    CourseSessionComponent,
  ],
  templateUrl: './course-unit.component.html',
  styleUrl: './course-unit.component.css',
})
export class CourseUnitComponent {
  @Input() unit!: IUnit;

  authService = inject(AuthService);

  showBlockedModal = false;
  isUserLogged: boolean = true;
  showSessions: boolean = false;

  ngOnInit(): void {
    this.authService.isLoggedIn$().subscribe((isLogged) => {
      this.isUserLogged = isLogged;
    });
  }
}
