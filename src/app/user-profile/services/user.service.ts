import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ILogin, IUserDetails } from '../../home/interface/Login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  api_url = base_url + '/userprofile';
  api_url_details = base_url + '/userdetail';

  getUsers() {
    return this.http.get<ILogin[]>(`${this.api_url}/list`);
  }

  getUser(id: number): Observable<ILogin> {
    return this.http.get<ILogin>(`${this.api_url}/${id}`);
  }

  createUser(login: ILogin) {
    return this.http.post<ILogin>(`${this.api_url}/register`, login);
  }

  updateUser(login: ILogin) {
    return this.http.patch<ILogin>(`${this.api_url}/${login.userId}`, login);
  }

  deleteUser(id: number) {
    return this.http.delete<ILogin>(`${this.api_url}/${id}`);
  }

  logInUser(login: ILogin) {
    return this.http.post<ILogin>(`${this.api_url}/login`, login);
  }
}
