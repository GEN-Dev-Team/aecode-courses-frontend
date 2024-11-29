import { Component } from '@angular/core';
import { SideBarItemComponent } from './side-bar-item/side-bar-item.component';

export interface IEndpointItem {
  name: string;
  getEndpoint: string;
  postEndpoint: string;
  endpoint: string;
}
@Component({
  selector: 'app-admin-side-bar',
  standalone: true,
  imports: [SideBarItemComponent],
  templateUrl: './admin-side-bar.component.html',
  styleUrl: './admin-side-bar.component.css',
})
export class AdminSideBarComponent {
  selectedItem = 'Administradores';

  sideBarList: IEndpointItem[] = [
    {
      name: 'Administradores',
      getEndpoint: '/userprofile/list',
      postEndpoint: '/userprofile/register',
      endpoint: '/userprofile',
    },
    {
      name: 'Usuarios',
      getEndpoint: '/userprofile/list',
      postEndpoint: '/userprofile/register',
      endpoint: '/userprofile',
    },
    {
      name: 'Cursos',
      getEndpoint: '/course',
      postEndpoint: '/course',
      endpoint: '/course',
    },
    {
      name: 'Modulos',
      getEndpoint: '/module',
      postEndpoint: '/module',
      endpoint: '/module',
    },
    {
      name: 'Unidades',
      getEndpoint: '/unit',
      postEndpoint: '/unit',
      endpoint: '/unit',
    },
    {
      name: 'Sesiones',
      getEndpoint: '/session',
      postEndpoint: '/session',
      endpoint: '/session',
    },
  ];

  selectItem(item: IEndpointItem) {
    this.selectedItem = item.name;
  }
}
