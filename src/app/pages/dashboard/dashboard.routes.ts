import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/dashboard-layout/dashboard-layout.component').then(m => m.DashboardLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'turnos/agenda',
        pathMatch: 'full',
      },
      /* {
        path: 'inicio',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
      }, */
      {
        path: 'turnos/agenda',
        loadComponent: () => import('./pages/shifts/shifts.component').then(m => m.ShiftsComponent),
      },
      {
        path: 'horarios/configuracion',
        loadComponent: () => import('./pages/schedules/schedules.component').then(m => m.SchedulesComponent),
      },
      {
        path: 'formulario/configuracion',
        loadComponent: () => import('./pages/fields/fields.component').then(m => m.FieldsComponent),
      },
    ]
  }
];
