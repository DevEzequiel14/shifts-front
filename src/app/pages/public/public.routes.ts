import { Routes } from '@angular/router';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/public-layout/public-layout.component').then(m => m.PublicLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home/home.component').then(m => m.HomeComponent),
      },
      {
        path: ':slug',
        loadComponent: () =>
          import('./shift-form/shift-form.component').then(m => m.ShiftFormComponent),
      }
    ]
  }
];
