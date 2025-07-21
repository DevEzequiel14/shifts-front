import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { TimeItemComponent } from '../time-item/time-item.component';
import { AngularSvgIconModule } from "angular-svg-icon";

@Component({
  selector: 'app-day-item',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, TimeItemComponent, AngularSvgIconModule],
  templateUrl: './day-item.component.html',
  styleUrl: './day-item.component.css'
})
export class DayItemComponent {
  @Input() name!: string;
  active: boolean = !['Sábado', 'Domingo'].includes(this.name);
  schedules = [{ from: '09:00', to: this.name === 'Lunes' ? '13:00' : '17:00' }];

  deleteSchedules(index: number) {
    if (this.schedules.length > 1) {
      this.schedules.splice(index, 1);
    }
  }
}
