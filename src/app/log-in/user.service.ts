import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { ILogin } from './interface/Login';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  api_url = base_url + '/login';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<ILogin[]>(`${this.api_url}`);
  }

  getUser(id: number) {
    return this.http.get<ILogin>(`${this.api_url}/${id}`);
  }

  createUser(login: ILogin) {
    return this.http.post<ILogin>(`${this.api_url}`, login);
  }

  updateUser(login: ILogin) {
    return this.http.put<ILogin>(`${this.api_url}/${login.id}`, login);
  }

  deleteUser(id: number) {
    return this.http.delete<ILogin>(`${this.api_url}/${id}`);
  }
}
