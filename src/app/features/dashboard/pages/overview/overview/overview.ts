import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview implements OnInit {

  loading: boolean = true;

  summaryCards: any[] = [];
  recentActivities: any[] = [];

  // 🔹 AG GRID 
  columnDefs = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'status', headerName: 'Status' }
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };

  rowData: any[] = [];

  ngOnInit(): void {
    this.loadOverviewData();
  }

  loadOverviewData() {
    setTimeout(() => {

      //  SUMMARY CARDS
      this.summaryCards = [
        { title: 'Users', value: 1200, icon: 'fa-users', color: 'primary' },
        { title: 'Orders', value: 320, icon: 'fa-shopping-cart', color: 'success' },
        { title: 'Revenue', value: 45000, icon: 'fa-rupee-sign', color: 'warning' },
        { title: 'Pending', value: 18, icon: 'fa-clock', color: 'danger' }
      ];

      //  RECENT ACTIVITY
      this.recentActivities = [
        { message: 'New user registered', time: '2 mins ago' },
        { message: 'Order #234 created', time: '10 mins ago' },
        { message: 'Payment received', time: '1 hour ago' }
      ];

      //  AG GRID DATA
      this.rowData = [
        { id: 1, name: 'Anuj', email: 'anuj@gmail.com', status: 'Active' },
        { id: 2, name: 'Rahul', email: 'rahul@gmail.com', status: 'Inactive' },
        { id: 3, name: 'Amit', email: 'amit@gmail.com', status: 'Active' },
        { id: 4, name: 'Neha', email: 'neha@gmail.com', status: 'Active' }
      ];

      this.loading = false;
    }, 1000);
  }
}
 




