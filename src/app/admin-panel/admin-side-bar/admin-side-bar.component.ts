import { Component } from '@angular/core';
import { SideBarItemComponent } from './side-bar-item/side-bar-item.component';

interface ISideBarItem {
  name: string;
  getEndpoint: string;
  postEndpoint: string;
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
    {
      name: 'Administradores',
      getEndpoint: '/userprofile/list',
      postEndpoint: '/userprofile/register',
    },
    {
      name: 'Usuarios',
      getEndpoint: '/userprofile/list',
      postEndpoint: '/userprofile/register',
    },
    { name: 'Cursos', getEndpoint: '/course', postEndpoint: '/course' },
    { name: 'Modulos', getEndpoint: '/module', postEndpoint: '/module' },
    { name: 'Unidades', getEndpoint: '/unit', postEndpoint: '/unit' },
    { name: 'Sesiones', getEndpoint: '/session', postEndpoint: '/session' },
  ];
}
