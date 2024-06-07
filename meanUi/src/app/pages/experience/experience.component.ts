import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import * as L from 'leaflet';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ MatRippleModule, MapComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})

export class ExperienceComponent {
  centered = false;
  disabled = false;
  unbounded = false;

  radius=500;
  color='#74777f54';
}
