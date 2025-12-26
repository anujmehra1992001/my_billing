import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.LoginComponent)
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard/dashboard')
        .then(m => m.DashboardComponent)
  },

  {
    path: 'customers',
    loadComponent: () =>
      import('./features/customers/customers/customers')
        .then(m => m.CustomersComponent)
  },

  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products/products')
        .then(m => m.ProductsComponent)
  },

  {
    path: 'invoices',
    loadComponent: () =>
      import('./features/invoices/invoices/invoices')
        .then(m => m.InvoicesComponent)
  },
  {
    path: 'sidebar',
    loadComponent: () =>
      import('./core/layout/sidebar/sidebar')
        .then(m => m.SidebarComponent)
  },
  {
    path: 'topbar',
    loadComponent: () =>
      import('./core/layout/topbar/topbar')
        .then(m => m.TopbarComponent)
  },

  { path: '**', redirectTo: 'login' }
];
