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
  errorMsg: string = '';

  deleteSchedules(index: number) {
    if (this.schedules.length > 1) {
      this.schedules.splice(index, 1);
    }
  }
  addSchedule() {
    const orderlySchedules = [...this.schedules].sort((a, b) => a.from.localeCompare(b.from));
    const lastSchedule = orderlySchedules[orderlySchedules.length - 1];
    const nextFrom = this.addMinutes(lastSchedule.to, 10);
    const nextTo = this.addMinutes(nextFrom, 60);
    if (this.schedules.every(h => !this.overlap(h, { from: nextFrom, to: nextTo }))) {
      this.schedules.push({ from: nextFrom, to: nextTo });
      this.errorMsg = '';
    } else {
      this.errorMsg = 'El nuevo horario se solapa con otro existente. Por favor ajusta manualmente.';
    }
  }

  addMinutes(hora: string, minutos: number): string {
    const [h, m] = hora.split(':').map(Number);
    const date = new Date();
    date.setHours(h, m + minutos);
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  }

  overlap(a: { from: string; to: string }, b: { from: string; to: string }): boolean {
    return a.from < b.to && b.from < a.to;
  }

  getSchedulesWithout(index: number): { from: string; to: string }[] {
    return this.schedules.filter((_, i) => i !== index);
  }
}
