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
  @Input() from: string = '09:00';
  @Output() fromChange = new EventEmitter<string>();
  @Input() to: string = '17:00';
  @Output() toChange = new EventEmitter<string>();

  // Métodos para emitir los cambios
  onDesdeChange(value: string) {
    this.from = value;
    this.fromChange.emit(value);
  }

  onHastaChange(value: string) {
    this.to = value;
    this.toChange.emit(value);
  }
}
