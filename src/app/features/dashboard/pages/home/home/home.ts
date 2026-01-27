import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  loading = true;     
  dashboardData: any;  
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadDashboard();
  }

  loadDashboard() {
   this.loading = true;

    this.http.get('http://localhost:3000/api/dashboard/summary')
      .subscribe({
        next: (res) => {
          this.dashboardData = res;
         
        },
        error: () => {
          this.error = 'Failed to load dashboard';
          this.loading = false;
        }
      });
  }
}
