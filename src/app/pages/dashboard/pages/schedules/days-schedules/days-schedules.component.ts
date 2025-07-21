import { Component } from '@angular/core';
import { DayItemComponent } from './day-item/day-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-days-schedules',
  standalone: true,
  imports: [DayItemComponent, NgFor],
  templateUrl: './days-schedules.component.html',
  styleUrl: './days-schedules.component.css'
})
export class DaysSchedulesComponent {
  dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
}
