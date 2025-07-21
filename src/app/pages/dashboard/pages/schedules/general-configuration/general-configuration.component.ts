
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-general-configuration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './general-configuration.component.html',
  styleUrl: './general-configuration.component.css'
})
export class GeneralConfigurationComponent {
  duracion = 30;
  buffer = 5;

}
