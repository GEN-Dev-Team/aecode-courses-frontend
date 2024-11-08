import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css',
})
export class ViewProfileComponent {
  @Output() isClosed = new EventEmitter<boolean>();

  authService: AuthService = inject(AuthService);
  route: Router = inject(Router);

  userData = JSON.parse(localStorage.getItem('user') || '{}');

  isAdminLogged: boolean = this.userData.role === 'admin';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.isAdminLogged);
  }
  closeModal() {
    this.isClosed.emit(false);
  }

  logOut() {
    this.authService.logout();
    this.closeModal();
  }

  redirectToAdminView() {
    this.route.navigate(['/admin-panel']);
  }
}
