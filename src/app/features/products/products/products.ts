import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports:[],
  template: `
    <div style="padding:20px">
      <h2>Products</h2>

      <button>Add Product</button>

      <ul>
        <li>Product A - ₹100</li>
        <li>Product B - ₹200</li>
      </ul>
    </div>
  `
})
export class ProductsComponent {}
