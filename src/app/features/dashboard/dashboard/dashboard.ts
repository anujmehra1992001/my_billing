import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  path: string;
  icon: string;
}

interface Card {
  title: string;
  value: number;
  icon: string;
}

interface User {
  email: string;
  role: string;
}

@Component({
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  imports: [CommonModule, RouterModule  ]
})
export class DashboardComponent implements OnInit {

  loggedInUser: User = { email: '', role: '' };

  menuItems: MenuItem[] = [
    { label: 'Home', path: 'home', icon: 'fas fa-home' },
    { label: 'Dashboard', path: 'overview', icon: 'fas fa-chart-line' },
    { label: 'Tasks', path: 'tasks', icon: 'fas fa-tasks' },
    { label: 'Users', path: 'users', icon: 'fas fa-users' },
    { label: 'Notifications', path: 'notifications', icon: 'fas fa-bell' },
    { label: 'Settings', path: 'settings', icon: 'fas fa-cog' }
  ];

  cards: Card[] = [
    { title: 'New Orders', value: 190, icon: 'fas fa-shopping-bag' },
    { title: 'Total Profit', value: 987, icon: 'fas fa-dollar-sign' },
    { title: 'Emails', value: 236, icon: 'fas fa-envelope' }
  ];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    const tokenData = this.auth.getDecodedToken();
    if (tokenData) {
      this.loggedInUser.email = tokenData.email;
      this.loggedInUser.role = tokenData.role;
    } else {
      this.router.navigate(['/login']); 
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
