import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hosts} from '../enums/hosts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(user) {
    return this.http.post(`${Hosts.API_HOST}/auth/user`, {email: user.email, password: user.password});
  }


  register(user) {
    return this.http.post(`${Hosts.API_HOST}/user`, {email: user.email, password: user.password});
  }
}
