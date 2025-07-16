import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { SubMenuItem } from '../../../../../../core/models/menu.model';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    SidebarSubmenuComponent,
    AngularSvgIconModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent implements OnInit {
  constructor(public menuService: MenuService) { }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  ngOnInit(): void { }

}
