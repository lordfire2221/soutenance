import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  setDataInLocalStorage(variableName: string, data: any) {
    localStorage.setItem(variableName, data);
  }
  getData(name: string) {
    return localStorage.getItem(name);
  }
  clearStorage() {
    localStorage.clear();
  }
  private readonly ACCESS_TOKEN_KEY = 'access_token';

  constructor(private http: HttpClient) { }

  signup(user: any): Observable<any> {
    return this.http.post<Response>('https://pacifique.yes.bj/api/user/signup', { ...user });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<Response>('https://pacifique.yes.bj/api/user/login', { username, password });
  }

  logout(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    const accessToken = this.getAccessToken();
    return !!accessToken;
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  setAccessToken(accessToken: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
  }
}

