import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div style="padding:20px">
      <h1>Dashboard</h1>

      <p>Total Sales: ₹0</p>
      <p>Total Invoices: 0</p>
      <p>Total Customers: 0</p>
    </div>
  `
})
export class DashboardComponent {}
