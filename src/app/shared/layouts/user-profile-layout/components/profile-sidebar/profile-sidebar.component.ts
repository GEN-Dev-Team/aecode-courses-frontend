import { Component, EventEmitter, Output } from '@angular/core';
import { UserPresentationComponent } from '../user-presentation/user-presentation.component';
import { ProfileSidebarItemComponent } from '../profile-sidebar-item/profile-sidebar-item.component';

@Component({
  selector: 'app-profile-sidebar',
  standalone: true,
  imports: [UserPresentationComponent, ProfileSidebarItemComponent],
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.scss',
})
export class ProfileSidebarComponent {
  @Output() emitItemIndexSelected = new EventEmitter<number>();

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
  }
}
