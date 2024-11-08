import { Component } from '@angular/core';
import { SideBarItemComponent } from './side-bar-item/side-bar-item.component';
import { AdminTableComponent } from '../admin-table/admin-table.component';

interface ISideBarItem {
  name: string;
  link: string;
}
@Component({
  selector: 'app-admin-side-bar',
  standalone: true,
  imports: [SideBarItemComponent],
  templateUrl: './admin-side-bar.component.html',
  styleUrl: './admin-side-bar.component.css',
})
export class AdminSideBarComponent {
  sideBarList: ISideBarItem[] = [
    { name: 'Administradores', link: '/admins' },
    { name: 'Usuarios', link: '/users' },
    { name: 'Cursos', link: '/courses' },
    { name: 'Modulos', link: '/modules' },
    { name: 'Unidades', link: '/units' },
    { name: 'Sesiones', link: '/sessions' },
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Costos', link: '/costs' },
  ];
}
