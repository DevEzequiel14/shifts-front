import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/dashboard-layout/dashboard-layout.component').then(m => m.DashboardLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'turnos',
        loadComponent: () => import('./shifts/shifts.component').then(m => m.ShiftsComponent),
      },
      {
        path: 'horarios',
        loadComponent: () => import('./schedules/schedules.component').then(m => m.SchedulesComponent),
      },
    ]
  }
];
