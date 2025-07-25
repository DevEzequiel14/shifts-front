import { Component } from '@angular/core';
import { GeneralConfigurationComponent } from './general-configuration/general-configuration.component';
import { DaysSchedulesComponent } from './days-schedules/days-schedules.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [GeneralConfigurationComponent, DaysSchedulesComponent, ButtonComponent],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.css'
})
export class SchedulesComponent {

}
