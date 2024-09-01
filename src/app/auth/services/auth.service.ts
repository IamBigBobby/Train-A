import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SignInResponse } from '../models/sign-in.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly signInUrl = '/api/signin';

  private readonly signUpUrl = '/api/signup';

  private readonly logoutUrl = '/api/logout';

  private readonly adminLogin = 'admin@admin.com';

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(this.signInUrl, { email, password }).pipe(
      tap((response) => {
        this.setToken(response.token);
        this.setLogin(email);
      })
    );
  }

  signUp(email: string, password: string) {
    return this.http.post(this.signUpUrl, { email, password });
  }

  logout() {
    return this.http.delete(this.logoutUrl).pipe(
      tap(() => {
        this.clearToken();
        this.clearLogin();
      })
    );
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token')!;
  }

  public clearToken(): void {
    localStorage.removeItem('token');
  }

  private setLogin(login: string): void {
    localStorage.setItem('login', login);
  }

  public getLogin(): string | null {
    return localStorage.getItem('login');
  }

  public clearLogin(): void {
    localStorage.removeItem('login');
  }

  public isAdmin(): boolean {
    return this.adminLogin === this.getLogin();
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
