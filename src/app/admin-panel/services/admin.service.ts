import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environment/environment';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private getEndpoint = new BehaviorSubject<string>('');
  private postEndpoint = new BehaviorSubject<string>('');
  private dataList = new BehaviorSubject<any[]>([]);

  http: HttpClient = inject(HttpClient);

  getEndpoint$ = this.getEndpoint.asObservable();
  postEndpoint$ = this.postEndpoint.asObservable();
  dataList$ = this.dataList.asObservable();

  setGetEndpoint(value: string) {
    this.getEndpoint.next(value);
  }

  setPostEndpoint(value: string) {
    this.postEndpoint.next(value);
  }

  getDataList() {
    const url = `${base_url}${this.getEndpoint.getValue()}`;
    console.log(url);

    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        this.dataList.next(data);
        console.log(data);
      },

      error: (err) => {
        console.error('Error al obtener los datos:', err);
      },
    });
  }

  createItem(value: any) {
    const url = `${base_url}${this.postEndpoint.getValue()}`;

    console.log(url);

    this.http.post(url, value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error('Error al crear el item:', err);
      },
    });
  }
}
