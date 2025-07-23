import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-stats',
  standalone: true,
  imports: [],
  templateUrl: './appointment-stats.component.html',
  styleUrl: './appointment-stats.component.css'
})
export class AppointmentStatsComponent {
  confirmados = 2;
  pendientes = 1;
  cancelados = 1;
}
