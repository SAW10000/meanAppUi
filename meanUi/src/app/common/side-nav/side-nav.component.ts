import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent implements OnChanges {
  @Input() sideNav: boolean | undefined;
  @Output() sideNavChange=new EventEmitter<boolean>();
  @ViewChild('drawer') drawer!: MatDrawer;

  menu = [
    { path:'home',menu_name: 'home', menu_icon: 'home' },
    { path:'experience',menu_name: 'experience', menu_icon: 'bolt' },
    { path:'education',menu_name: 'education', menu_icon: 'abc' },
    { path:'skills',menu_name: 'skills', menu_icon: 'javascript' },
    {
      path:'personal_information',menu_name: 'personal information',
      menu_icon: 'settings_heart',
    },
    { path:'contact',menu_name: 'contact', menu_icon: 'contact_page' },
    { path:'map',menu_name: 'map', menu_icon: 'map' }
  ];

  sideNavClose() {
  this.sideNavChange.emit(false);
  }

  ngOnChanges(): void {
    this.drawer?.toggle();
  }
}
