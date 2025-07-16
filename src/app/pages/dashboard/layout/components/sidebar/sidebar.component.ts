import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import packageJson from '../../../../../../../package.json';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, SidebarMenuComponent, NgIf, AngularSvgIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public appJson: any = packageJson;

  constructor(public menuService: MenuService) {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
