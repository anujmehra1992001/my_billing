import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div style="padding:20px">
      <h2>Customers</h2>

      <button>Add Customer</button>

      <ul>
        <li>Customer 1</li>
        <li>Customer 2</li>
        <li>Customer 3</li>
      </ul>
    </div>
  `
})
export class CustomersComponent {}


