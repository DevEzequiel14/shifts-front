
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PositiveNumberDirective } from '../../../../../shared/utils/positive-number.directive';


@Component({
  selector: 'app-general-configuration',
  standalone: true,
  imports: [FormsModule, PositiveNumberDirective],
  templateUrl: './general-configuration.component.html',
  styleUrl: './general-configuration.component.css'
})
export class GeneralConfigurationComponent {

  duration: number = 30;
  buffer: number = 5;

  get shiftsPerHour(): number {
    const total = this.duration + this.buffer;
    return total > 0 ? Math.floor(60 / total) : 0;
  }
}
