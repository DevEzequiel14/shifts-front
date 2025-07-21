import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { TimeItemComponent } from '../time-item/time-item.component';

@Component({
  selector: 'app-day-item',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, TimeItemComponent],
  templateUrl: './day-item.component.html',
  styleUrl: './day-item.component.css'
})
export class DayItemComponent {
  @Input() nombre!: string;
  activo: boolean = !['Sábado', 'Domingo'].includes(this.nombre);
  horarios = [{ desde: '09:00', hasta: this.nombre === 'Lunes' ? '13:00' : '17:00' }];
}
