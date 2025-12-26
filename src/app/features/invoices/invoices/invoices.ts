import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div style="padding:20px">
      <h2>Invoices</h2>

      <button>Create Invoice</button>

      <ul>
        <li>Invoice #001 - ₹500</li>
        <li>Invoice #002 - ₹1200</li>
      </ul>
    </div>
  `
})
export class InvoicesComponent {}
