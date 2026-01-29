import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';

@Component({
  selector: 'app-overview',
  imports: [CommonModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
  loading: boolean = false;
  summaryCards: any[] = [];
  recentActivities: any[] = [];

  
  ngOnInit(): void {
    this.loadOverviewData();
  }

  loadOverviewData() {
    
    setTimeout(() => {
      this.summaryCards = [
        { title: 'Users', value: 1200, icon: 'fa-users', color: 'primary' },
        { title: 'Orders', value: 320, icon: 'fa-shopping-cart', color: 'success' },
        { title: 'Revenue', value: 45000, icon: 'fa-rupee-sign', color: 'warning' },
        { title: 'Pending', value: 18, icon: 'fa-clock', color: 'danger' }
      ];

      this.recentActivities = [
        { message: 'New user registered', time: '2 mins ago' },
        { message: 'Order #234 created', time: '10 mins ago' },
        { message: 'Payment received', time: '1 hour ago' }
      ];

      this.loading = false;
    }, 1000);
  }
}
 




