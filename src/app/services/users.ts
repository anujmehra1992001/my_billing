import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  
getUsers() {
  const token = localStorage.getItem('token');
  return this.http.get<any[]>(`${this.API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}}