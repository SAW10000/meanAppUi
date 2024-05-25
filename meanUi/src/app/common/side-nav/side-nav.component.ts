import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent implements OnChanges {
  @Input() openSideNav: boolean | undefined;
  @ViewChild('drawer') drawer!: MatDrawer;

  menu = [
    { menu_name: 'home', menu_icon: 'home' },
    { menu_name: 'experience', menu_icon: 'bolt' },
    { menu_name: 'education', menu_icon: 'abc' },
    { menu_name: 'skills', menu_icon: 'javascript' },
    {
      menu_name: 'personal information',
      menu_icon: 'settings_heart',
    },
    { menu_name: 'contact', menu_icon: 'contact_page' }
  ];

  ngOnChanges(): void {
    this.drawer?.toggle();
  }
}
