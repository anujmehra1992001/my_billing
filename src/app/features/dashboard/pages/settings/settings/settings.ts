import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings implements OnInit {

  loading = true;
  profile: any = {};
  message = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.http.get('http://localhost:3000/api/profile')
      .subscribe({
        next: (res) => {
          this.profile = res;
          this.loading = false;
        },
        error: () => this.loading = false
      });
  }

  updateProfile() {
    this.http.put('http://localhost:3000/api/profile', {
      name: this.profile.name
    }).subscribe({
      next: () => this.message = 'Profile updated '
    });
    
  }
}
