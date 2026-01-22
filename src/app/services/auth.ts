import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // ===== LOGIN =====
  login(data: { email: string; password: string }) {
    return this.http.post<any>(`${this.API}/login`, data);
  }

  // ===== TOKEN STORAGE =====
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
  }

  // ===== DECODE TOKEN =====
  getDecodedToken(): any | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode(token);
    } catch (err) {
      console.error('Invalid token');
      this.logout();
      return null;
    }
  }

  isLoggedIn(): boolean {
    return !!this.getDecodedToken();
  }
}
