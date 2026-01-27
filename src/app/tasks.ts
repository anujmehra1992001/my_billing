import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private API = 'http://localhost:3000/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  addTask(task: any) {
    return this.http.post(this.API, task);
  }

  updateTask(id: number, task: any) {
    return this.http.put(`${this.API}/${id}`, task);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
