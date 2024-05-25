import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent implements OnChanges {
  @Input() openSideNav : boolean | undefined;
  showFiller=false;
  @ViewChild('drawer') drawer!: MatDrawer;

  ngOnChanges():void{
    this.drawer?.toggle();
  }
}
