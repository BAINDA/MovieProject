import { Component } from '@angular/core';
import { NavItemConfig } from '../../interfaces/ui-config/nav-item-config.interface';
import { CommonModule, NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  constructor(private router: Router) {}

  navItems: NavItemConfig[] = [
    {
      name: 'Movie',
      path: 'movies',
      active: false,
    },
    {
      name: 'TV Shows',
      path: 'tvshows',
      active: false,
    },
    // {
    //   name: 'Suggest Me',
    //   path: 'suggests',
    //   icon: 'bi bi-arrow-right',
    //   active: false,
    // },
  ];

  selectedNavItem(navItem: NavItemConfig) {
    this.navItems.map(
      (item: NavItemConfig) => (item.active = navItem.name === item.name)
    );

    this.router.navigateByUrl(navItem.path);
  }

  homePage() {
    this.router.navigateByUrl('');
  }
}
