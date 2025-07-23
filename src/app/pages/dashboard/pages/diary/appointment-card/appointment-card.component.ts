import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-appointment-card',
  standalone: true,
  imports: [NgIf, StatusBadgeComponent, ButtonComponent],
  templateUrl: './appointment-card.component.html',
  styleUrl: './appointment-card.component.css'
})
export class AppointmentCardComponent {
  @Input() appointment: any;
}
