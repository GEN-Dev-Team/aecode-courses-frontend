import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environment/environment';
import { IEndpointItem } from '../admin-side-bar/admin-side-bar.component';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private dataList = new BehaviorSubject<any[]>([]);

  private endpointItem = new BehaviorSubject<IEndpointItem>({
    name: 'Administradores',
    getEndpoint: '/userprofile/list',
    postEndpoint: '/userprofile/register',
    endpoint: '/userprofile',
  });

  http: HttpClient = inject(HttpClient);

  dataList$ = this.dataList.asObservable();

  endpointItem$ = this.endpointItem.asObservable();

  setEndpointItem(item: IEndpointItem) {
    this.endpointItem.next(item);
  }

  getEndpointIem() {
    return this.endpointItem.getValue();
  }

  getDataList() {
    const url = `${base_url}${this.endpointItem.getValue().getEndpoint}`;

    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        if (this.endpointItem.getValue().name == 'Administradores') {
          data = this.filterByUserRole(data, 'admin');
        } else if (this.endpointItem.getValue().name == 'Usuarios') {
          data = this.filterByUserRole(data, 'user');
        }

        this.dataList.next(data);
      },

      error: (err) => {
        console.error('Error al obtener los datos:', err);
      },
    });
  }

  getItemById(id: number) {
    const url = `${base_url}${this.endpointItem.getValue().endpoint}/${id}`;

    return this.http.get<any>(url);
  }

  createItem(value: any) {
    const url = `${base_url}${this.endpointItem.getValue().postEndpoint}`;

    console.log(url);

    this.http.post(url, value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error('Error al crear el item:', err);
        this.getDataList();
      },
    });
  }

  updateItem(value: any, id: number) {
    const url = `${base_url}${this.endpointItem.getValue().endpoint}/${id}`;
    console.log(url);
    console.log(this.endpointItem.getValue().endpoint);

    this.http.patch(url, value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error('Error al actualizar el item:', err);
        this.getDataList();
      },
    });
  }

  deleteItem(id: number) {
    const url = `${base_url}${this.endpointItem.getValue().endpoint}/${id}`;
    console.log(url);

    this.http.delete(url).subscribe({
      next: (data) => {
        console.log(data);
        this.getDataList();
      },
      error: (err) => {
        console.error('Error al eliminar el item:', err);
      },
    });
  }

  isUserList(dataList: any[]) {
    const objectAtributes: String[] = Object.keys(dataList[0]);

    let isUserList = false;

    objectAtributes.some((key) => {
      if (key === 'rol') {
        isUserList = true;
      }
    });
    return isUserList;
  }

  filterByUserRole(dataList: any[], role: string) {
    return dataList.filter((item) => item.rol === role);
  }
}
