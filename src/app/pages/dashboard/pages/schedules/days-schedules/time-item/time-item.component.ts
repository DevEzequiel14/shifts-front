import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './time-item.component.html',
  styleUrl: './time-item.component.css'
})
export class TimeItemComponent {
  @Input() desde: string = '09:00';
  @Output() desdeChange = new EventEmitter<string>();
  @Input() hasta: string = '17:00';
  @Output() hastaChange = new EventEmitter<string>();

  // Métodos para emitir los cambios
  onDesdeChange(value: string) {
    this.desde = value;
    this.desdeChange.emit(value);
  }

  onHastaChange(value: string) {
    this.hasta = value;
    this.hastaChange.emit(value);
  }
}
