import { NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-item',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './time-item.component.html',
  styleUrl: './time-item.component.css'
})
export class TimeItemComponent implements OnChanges {
  @Input() from: string = '';
  @Output() fromChange = new EventEmitter<string>();
  @Input() to: string = '';
  @Output() toChange = new EventEmitter<string>();
  @Input() schedules: { from: string; to: string }[] = [];
  @Input() index!: number;

  hoursFromAvailable: string[] = [];
  hoursToAvailable: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['schedules'] || changes['from'] || changes['to']) {
      this.generateHours();
    }
  }

  generateHours(): void {
    this.hoursFromAvailable = this.generateAvailableHours(true);
    this.hoursToAvailable = this.generateAvailableHours(false);
  }

  onFromChange(value: string) {
    this.from = value;
    this.fromChange.emit(value);
    this.generateHours();
  }

  onToChange(value: string) {
    this.to = value;
    this.toChange.emit(value);
    this.generateHours();
  }
  generateAvailableHours(isFrom: boolean): string[] {
    const hours: string[] = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 10) {
        const hh = String(h).padStart(2, '0');
        const mm = String(m).padStart(2, '0');
        const hour = `${hh}:${mm}`;

        let overlap = false;
        for (let i = 0; i < this.schedules.length; i++) {
          if (i === this.index) continue;
          const hItem = this.schedules[i];
          if (isFrom) {
            if (hour >= hItem.from && hour < hItem.to) {
              overlap = true;
              break;
            }
          } else {
            if (hour > hItem.from && hour <= hItem.to) {
              overlap = true;
              break;
            }
          }
        }
        if (overlap) continue;

        if (isFrom) {

          if (this.to && hour >= this.to) continue;

          let prevTo = null;
          if (this.index > 0 && this.schedules[this.index - 1]) {
            prevTo = this.schedules[this.index - 1].to;
          }
          if (prevTo && hour < this.addMinutes(prevTo, 10)) continue;
          hours.push(hour);
        } else {

          if (this.from && hour <= this.from) continue;

          let nextFrom = null;
          if (this.index < this.schedules.length - 1 && this.schedules[this.index + 1]) {
            nextFrom = this.schedules[this.index + 1].from;
          }
          if (nextFrom && hour > this.subtractMinutes(nextFrom, 10)) continue;
          hours.push(hour);
        }
      }
    }
    return hours;
  }


  addMinutes(hour: string, minutes: number): string {
    const [h, m] = hour.split(":").map(Number);
    const date = new Date();
    date.setHours(h, m + minutes);
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  }

  subtractMinutes(hour: string, minutes: number): string {
    const [h, m] = hour.split(":").map(Number);
    const date = new Date();
    date.setHours(h, m - minutes);
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  }
}
