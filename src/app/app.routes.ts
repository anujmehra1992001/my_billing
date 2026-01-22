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
        .then(m => m.DashboardComponent),

    children: [

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },

      {
        path: 'home',
        loadComponent: () =>
          import('./features/dashboard/pages/home/home/home')
            .then(m => m.Home)
      },

      {
        path: 'overview',
        loadComponent: () =>
          import('./features/dashboard/pages/overview/overview/overview')
            .then(m => m.Overview)
      },

      {
        path: 'tasks',
        loadComponent: () =>
          import('./features/dashboard/pages/tasks/tasks/tasks')
            .then(m => m.Tasks)
      },

      {
        path: 'users',
        loadComponent: () =>
          import('./features/dashboard/pages/users/users/users')
            .then(m => m.Users)
      },

      {
        path: 'notifications',
        loadComponent: () =>
          import('./features/dashboard/pages/notifications/notifications/notifications')
            .then(m => m.Notifications)
      },

      {
        path: 'settings',
        loadComponent: () =>
          import('./features/dashboard/pages/settings/settings/settings')
            .then(m => m.Settings)
      }
    ]
  },

  { path: '**', redirectTo: 'login' }
];
