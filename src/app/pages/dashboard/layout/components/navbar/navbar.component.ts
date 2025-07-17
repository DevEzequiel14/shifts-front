import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AngularSvgIconModule, ProfileMenuComponent, NavbarMobileComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit(): void { }

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
