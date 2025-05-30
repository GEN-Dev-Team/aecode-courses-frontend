import { Component, EventEmitter, inject, Output } from '@angular/core';
import { UserPresentationComponent } from '../user-presentation/user-presentation.component';
import { ProfileSidebarItemComponent } from '../profile-sidebar-item/profile-sidebar-item.component';
import { AuthService } from '../../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-sidebar',
  standalone: true,
  imports: [UserPresentationComponent, ProfileSidebarItemComponent],
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.scss',
})
export class ProfileSidebarComponent {
  @Output() emitItemIndexSelected = new EventEmitter<number>();

  authService = inject(AuthService);
  router = inject(Router);

  itemIndexSelected = 0;

  sidebarList = [
    {
      name: 'Mi perfil',
      icon: 'user',
    },
    {
      name: 'Editar información',
      icon: 'user',
    },
    {
      name: 'Mis cursos',
      icon: 'user',
    },
    {
      name: 'Beneficions',
      icon: 'user',
    },
    {
      name: 'Configuraciones',
      icon: 'user',
    },
    {
      name: 'Cerrar sesión',
      icon: 'user',
    },
  ];

  selectItem(index: number) {
    this.itemIndexSelected = index;
    this.emitItemIndexSelected.emit(index);

    if (this.itemIndexSelected === 5) {
      this.logOutUser();
    }
  }

  logOutUser() {
    this.authService.logout('training');
  }

  ngAfterViewChecked(): void {
    const url = this.router.url;

    if (url.includes('my-courses')) {
      this.itemIndexSelected = 2;
    }
  }
}
