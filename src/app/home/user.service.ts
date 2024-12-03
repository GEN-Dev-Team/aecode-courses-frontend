import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { defaultLogInData, ILogin, IUserDetails } from './interface/Login';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  api_url = base_url + '/userprofile';
  api_url_details = base_url + '/userdetail';

  constructor(private http: HttpClient) {}

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

  createUserDetails(login: IUserDetails) {
    return this.http.post<IUserDetails>(`${this.api_url_details}/`, login);
  }

  getUserDetailsById(id: number): Observable<IUserDetails> {
    return this.http.get<IUserDetails>(`${this.api_url_details}/${id}`);
  }

  updateUserPassword(
    userId: number,
    currentPassword: string,
    newPassword: string
  ) {
    const params = {
      id: userId,
      currentPassword: currentPassword,
      newPassword: newPassword,
    };

    console.log(params);

    return this.http.patch(
      `${this.api_url}/${userId}/change-password`,
      {},
      {
        params,
      }
    );
  }
}
