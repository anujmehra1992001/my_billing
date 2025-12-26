import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-sidebar',
  template: `
    <div style="width:200px;padding:20px;background:#f2f2f2;height:100vh">
      <h3>Menu</h3>

      <a routerLink="/dashboard">Dashboard</a><br /><br />
      <a routerLink="/customers">Customers</a><br /><br />
      <a routerLink="/products">Products</a><br /><br />
      <a routerLink="/invoices">Invoices</a>
    </div>
  `
})
export class SidebarComponent {}
